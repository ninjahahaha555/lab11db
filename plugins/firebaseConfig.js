import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAcSEASR89Jbife8cFZf4ukyXMcafp3tEo',
    authDomain: 'hotelcheck11db.firebaseapp.com',
    databaseURL: 'https://hotelcheck11db.firebaseio.com',
    projectId: 'hotelcheck11db',
    storageBucket: 'hotelcheck11db.appspot.com',
    messagingSenderId: '503500669254',
    appId: '1:503500669254:web:8e0171fd36cbfa6d0ba547',
    measurementId: 'G-8EL44DL4SW'
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
