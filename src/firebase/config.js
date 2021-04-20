// Your web app's Firebase configuration
import firebase from 'firebase/app'
//import * as firebase from 'firebase/app';


//import firestore from 'firebase/app';

import  'firebase/storage';
import  'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAzZPckt0kH1Ne9q2sWyfUIZ18EkF7LD5Q",
    authDomain: "firegram-49591.firebaseapp.com",
    projectId: "firegram-49591",
    storageBucket: "firegram-49591.appspot.com",
    messagingSenderId: "201411791534",
    appId: "1:201411791534:web:7d52368cf89c64fd3ffb3f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage=firebase.storage();
  

  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectStorage,projectFirestore ,timestamp};