import json
import os
from datetime import datetime

import pandas as pd
import telegram
from firebase_admin import credentials, firestore, initialize_app
from telegram.error import BadRequest

CHAT_ID = os.environ['TELEGRAM_CHAT_ID']
SECRET_TOKEN = os.environ['TELEGRAM_SECRET_TOKEN']
FIREBASE_PROJECT_ID = os.environ['FIREBASE_PROJECT_ID']
FIREBASE_AUTH = os.environ['FIREBASE_AUTH']
BASE_PATH = os.path.abspath('.')


class WikiStorageTelegramBot:
    data_storage = None

    csv_columns = ['id', 'url', 'hashtags', 'creation_date']
    csv_filename = 'wikistorage.csv'
    csv_sep = ';'

    bot = None
    chat_id = None

    save_hashtag = '#saved'
    telegram_status_filename = 'telegram_status.json'
    telegram_stat = {
        'last_message_id': -1
    }

    db_collection = None

    def __init__(self, chat_id, secret_token, firebase_project_id, firebase_auth):
        self.bot = telegram.Bot(token=secret_token)
        self.chat_id = chat_id
        self.db_collection = self._init_cloud_firestone(firebase_project_id, firebase_auth)
        self._telegram_status()
        self._read_dataframe()

    def _init_cloud_firestone(self, firebase_project_id, firebase_auth):
        cred = credentials.Certificate(firebase_auth)
        initialize_app(cred, {'projectId': firebase_project_id})
        db = firestore.client()
        return db.collection(u'wiki')

    def _telegram_status(self):
        telegram_status_path = os.path.join(BASE_PATH, self.telegram_status_filename)
        if not os.path.exists(telegram_status_path):
            open(telegram_status_path, 'w+').write(json.dumps(self.telegram_stat)).close()
        else:
            self.telegram_stat = json.loads(open(telegram_status_path, 'r').read())

    def _get_entities(self, update):
        a = {
            'id': update['channel_post']['message_id'],
            'creation_date': update['channel_post']['date']
        }
        entities = update['channel_post']['entities']
        text = update['channel_post']['text']
        for entity in entities:
            entity_value = text[entity.offset: entity.offset + entity.length]
            entity_value = entity_value.replace('#', '') if entity.type == 'hashtag' else entity_value
            if not entity.type in a:
                a[entity.type] = [entity_value]
            else:
                a[entity.type].append(entity_value)
        return a

    def _has_entity_type(self, entity_list, entity_type):
        return any(entity['type'] == entity_type for entity in entity_list)

    def _filter_telegram_messages_saved(self, update):
        if hasattr(update, 'channel_post') and update['channel_post']:
            is_saved = update['channel_post']['message_id'] <= self.telegram_stat['last_message_id']
            entity_list = update['channel_post']['entities']
            return (not is_saved
                    and self._has_entity_type(entity_list, 'url')
                    and self._has_entity_type(entity_list, 'hashtag'))
        return False

    def _read_telegram_channel(self):
        update_list = filter(self._filter_telegram_messages_saved, self.bot.get_updates())
        for update in update_list:
            entities = self._get_entities(update)
            self._save_entities(entities)
            self._save_telegram_message(update)

    def _save_telegram_message(self, update):
        text = '{} {}'.format(update['channel_post']['text'], self.save_hashtag)
        message_id = update['channel_post']['message_id']
        try:
            self.bot.edit_message_text(text, self.chat_id, message_id)
            self.telegram_stat['last_message_id'] = message_id
        except BadRequest as e:
            print(e)

    def _save_entities(self, entities):
        self._save_entities_locally(entities)
        self._save_entities_externally(entities)

    def _save_entities_locally(self, entities):
        a = {
            'id': [entities['id']],
            'url': [','.join(entities['url'])],
            'hashtags': [','.join(entities['hashtag'])],
            'creation_date': [datetime.timestamp(entities['creation_date'])]
        }
        new_df = pd.DataFrame(a, columns=self.csv_columns)
        self.data_storage = self.data_storage.append(new_df, ignore_index=True)

    def _save_entities_externally(self, entities):
        self.db_collection.document(str(entities['id'])).set({
            u'url': entities['url'],
            u'hashtags': entities['hashtag'],
            u'creation_date': datetime.timestamp(entities['creation_date'])
        })

    def _read_dataframe(self):
        csv_path = os.path.join(BASE_PATH, self.csv_filename)
        if not os.path.exists(csv_path):
            data_frame = pd.DataFrame(columns=self.csv_columns)
            data_frame.to_csv(csv_path, index=False, sep=self.csv_sep, quotechar='"')
        self.data_storage = pd.read_csv(csv_path, sep=self.csv_sep)

    def _persist_telegram_status(self):
        telegram_status_path = os.path.join(BASE_PATH, self.telegram_status_filename)
        with open(telegram_status_path, 'w') as binary:
            binary.write(json.dumps(self.telegram_stat))

    def _persist_storage(self):
        csv_path = os.path.join(BASE_PATH, self.csv_filename)
        self.data_storage.to_csv(csv_path, index=False, sep=self.csv_sep, quotechar='"')

    def _exit(self):
        self._persist_telegram_status()
        self._persist_storage()

    def run(self):
        self._read_telegram_channel()
        self._exit()


def main():
    WikiStorageTelegramBot(CHAT_ID, SECRET_TOKEN, FIREBASE_PROJECT_ID, json.loads(FIREBASE_AUTH)).run()


if __name__ == '__main__':
    main()
