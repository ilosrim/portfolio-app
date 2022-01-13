// import * as firebase from '@firebase/app';
// import '@firebase/firestore'
const {
  firebase,
  initializeApp
} = require('firebase/app').default

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANKoLzkzNKVwsydCPajYhmEyktqjSVd50",
  authDomain: "portfolio-fcbc0.firebaseapp.com",
  projectId: "portfolio-fcbc0",
  storageBucket: "portfolio-fcbc0.appspot.com",
  messagingSenderId: "927521219670",
  appId: "1:927521219670:web:0739fd2afb3dc867b6c7f7",
  measurementId: "G-B30Q63SBFL"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = app.firestore();

export default db;