import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB7RShEHIe_X8_461kyeedfcZvtKlroDiw",
  authDomain: "wikistorage-b26d7.firebaseapp.com",
  databaseURL: "https://wikistorage-b26d7.firebaseio.com",
  projectId: "wikistorage-b26d7",
  storageBucket: "wikistorage-b26d7.appspot.com",
  messagingSenderId: "739366703886",
  appId: "1:739366703886:web:90834efb4292bbd4b8fd5f",
  measurementId: "G-XVC56RL11N",
}

export default class FirebaseClient {
  constructor(collection) {
    !firebase.apps.length && firebase.initializeApp(firebaseConfig)
    this.db = firebase.firestore()
    this.collection = collection
  }

  async fetchWikis() {
    const wikiList = []
    const wikiRef = this.db.collection(this.collection)
    const snapshot = await wikiRef.orderBy("creation_date", "desc").get()

    snapshot.forEach((doc) => {
      const id = doc.id
      wikiList.push({
        ...doc.data(),
        id,
      })
    })

    return wikiList
  }

  filterWikis(value) {
    return this.db
      .collection(this.collection)
      .where("hashtags", "array-contains", value)
      .get()
      .then(({ docs }) => {
        return docs.map((doc) => {
          const id = doc.id
          return {
            ...doc.data(),
            id,
          }
        })
      })
  }
}
