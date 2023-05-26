// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration --initially 'const'
var firebaseConfig = {
  apiKey: "AIzaSyAI_fWqmRVlIrJYqLMdTQL5nLFsD1spCx0",
  authDomain: "aquasnap-87777.firebaseapp.com",
  projectId: "aquasnap-87777",
  storageBucket: "aquasnap-87777.appspot.com",
  messagingSenderId: "121968423150",
  appId: "1:121968423150:web:7428dffada9727f53883ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const projectStorage = firebase(storage);
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export{projectStorage, projectFirestore, timestamp};