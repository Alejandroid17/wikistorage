<p>
     <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/Alejandroid17/wikistorage">
     <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Alejandroid17/wikistorage">
</p>

# WikiStorage

[WikiStorage](https://wikistorage.vercel.app/) is a simple project with a list of resources that could be useful.

## Usage

The new entries are read from a Telegram channel, using a [Telegram Bot](https://core.telegram.org/bots) and using
[GitHub Actions](https://docs.github.com/es/actions) and the entries are saved in Firebase.

> The entries will be updated depending on the schedule defined in `wiki_storage_telegram_bot.yml`.

#### Telegram Bot

In the secret settings of your project on GitHub, you need to define:

- **TELEGRAM_CHAT_ID**: Telegram channel id.
- **TELEGRAM_SECRET_TOKEN**: Telegram secret token.

#### Firebase

In the secret settings of your project on GitHub, you need to define:

- **FIREBASE_PROJECT_ID**: Firebase project id.
- **FIREBASE_AUTH**: Firebase settings auth.

## Dependencies

- Python 3.8
- NextJS 9.5.2

## Deploy

This proyect is deployed using Vercel. [Demo](https://wikistorage.vercel.app/)

> Notes: You need to define a `cors` proxy. The project uses a custom private fork of [CORS Anywhere](https://github.com/Rob--W/cors-anywhere).

## License
[MIT](https://choosealicense.com/licenses/mit/)
