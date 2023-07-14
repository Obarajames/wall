import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';


const firebaseConfig =({
    apiKey: "AIzaSyCHQtayp5on0qH6lxZrzdkmn300OSoomFU",
    authDomain: "smoothest-ff759.firebaseapp.com",
    databaseURL: "https://smoothest-ff759-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smoothest-ff759",
    storageBucket: "smoothest-ff759.appspot.com",
    messagingSenderId: "409059544385",
    appId: "1:409059544385:web:15ea2a06c02bb23fcfe5c0"
});
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

export {db, auth , storage};