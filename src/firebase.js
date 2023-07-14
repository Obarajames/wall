import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaIEW3TH0_30d5u21GSNsxtfvsNuSL4dM",
    authDomain: "awwonders-4bb2d.firebaseapp.com",
    databaseURL: "https://awwonders-4bb2d-default-rtdb.firebaseio.com",
    projectId: "awwonders-4bb2d",
    storageBucket: "awwonders-4bb2d.appspot.com",
    messagingSenderId: "682869488728",
    appId: "1:682869488728:web:e6f5bf6f632d608098de2d",
    measurementId: "G-Z9MV5HQ7WR"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { storage, db };

