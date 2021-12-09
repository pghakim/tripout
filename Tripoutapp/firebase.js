// Import the functions you need from the SDKs you need
import * as React from "react";
import Navigator from "./routes/navigation";
import "react-native-gesture-handler";
import firebase from "firebase";
import 'firebase/firestore'
import { useState } from "react/cjs/react.development";
import {StyleSheet, Text, TextInput, View } from 'react-native'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB743tXPBR3V3DpyZdwah-D4FGdshwbNCE",
  authDomain: "trip-out-58124.firebaseapp.com",
  projectId: "trip-out-58124",
  storageBucket: "gs://trip-out-58124.appspot.com",
  messagingSenderId: "724856084232",
  appId: "1:724856084232:web:0d04cfff053135da59febd",
  measurementId: "G-WNPGZB6BFE"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore()

const auth = firebase.auth();
const storage = firebase.storage();
export { auth, db, storage};
