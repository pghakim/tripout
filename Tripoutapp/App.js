// @refresh resaet
import * as React from "react";
import Navigator from "./routes/navigation";
import "react-native-gesture-handler";
import firebase from "firebase";
import 'firebase/firestore'
import { useState } from "react/cjs/react.development";
import {StyleSheet, Text, TextInput, View } from 'react-native'

/*const firebaseConfig = {
  apiKey: "AIzaSyB743tXPBR3V3DpyZdwah-D4FGdshwbNCE",
  authDomain: "trip-out-58124.firebaseapp.com",
  projectId: "trip-out-58124",
  storageBucket: "trip-out-58124.appspot.com",
  messagingSenderId: "724856084232",
  appId: "1:724856084232:web:0d04cfff053135da59febd",
  measurementId: "G-WNPGZB6BFE"
};

if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig)
}
const db = getFirestore();
await setDoc(doc(db, "users", "test"), {
  username: "test",
  email:"tester@tmail.com",
  password: "a"
});*/

export default function App() {

  return <Navigator />;
}