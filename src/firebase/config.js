import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyC50FMM8sjI_QON_PUzqhd_J_wL3wJQL3I',
  authDomain: 'firegram-65a7c.firebaseapp.com',
  projectId: 'firegram-65a7c',
  storageBucket: 'firegram-65a7c.appspot.com',
  messagingSenderId: '875341466113',
  appId: '1:875341466113:web:5ceb3a7e291180e1094e00',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const auth = app.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, auth, timestamp };
