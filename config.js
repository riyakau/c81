import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBRMcWfPHVXATe9eiEJFjODRH3ycnMXdCc",
  authDomain: "book-santa-app-7d87c.firebaseapp.com",
  projectId: "book-santa-app-7d87c",
  storageBucket: "book-santa-app-7d87c.appspot.com",
  messagingSenderId: "1070510626959",
  appId: "1:1070510626959:web:af318a1f3bd9b36e4078fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();