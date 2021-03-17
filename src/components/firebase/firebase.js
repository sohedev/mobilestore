import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1P1sGJoprNsoREdEsXVYyI6VBnyt0dII",
  authDomain: "mobilestore1-6039e.firebaseapp.com",
  projectId: "mobilestore1-6039e",
  storageBucket: "mobilestore1-6039e.appspot.com",
  messagingSenderId: "618654703558",
  appId: "1:618654703558:web:68762d812f288655415cc7",
  measurementId: "G-H5CKWVKBMD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
