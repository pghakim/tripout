// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRpRZLq-9BxKxzrAJQb-_dvMvj189K03A",
  authDomain: "logintest-e14c5.firebaseapp.com",
  projectId: "logintest-e14c5",
  storageBucket: "logintest-e14c5.appspot.com",
  messagingSenderId: "375442553947",
  appId: "1:375442553947:web:9a106cbae989cb5f74937e",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
