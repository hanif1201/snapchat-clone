import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBbU75Z8YFAM9kg06KSqubjfY1Y-bYLEhg",
  authDomain: "snapchat-clone-c3555.firebaseapp.com",
  projectId: "snapchat-clone-c3555",
  storageBucket: "snapchat-clone-c3555.appspot.com",
  messagingSenderId: "415842936925",
  appId: "1:415842936925:web:0d5a7e0cab51f6e37ec5b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.googleAuthProvider();
