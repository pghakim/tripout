import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import {auth, db,} from '../firebase';
import firebase from "firebase";
import 'firebase/firestore'
import firestore from "firebase/firestore"


 
//start of the app building code
export default function FriendRequest({ navigation }) {
    const [user, setUsers] = useState([]);
    const [email1, setEmail] = useState("");

    //code to handle navigation to the map screen
    const pressHandler = () => {
      navigation.navigate("Map");
    };
    //function to look to see if the user is sending an request to itself
    //the email itself exists and if the user is already friends with that person
    //if all those checks out then the person who email get entered in will get a request put into there doc in the request collection
    const requestHandler = () => {
        if (auth.currentUser.email == email1)
        {
            alert("you cannot send a email to youself")
        }
        else{
            db.collection("Friends").doc(auth.currentUser.email).get()
            .then((doc) => {
                setUsers(doc.data().friends); 
                console.log(user)
                if (user.includes(email1))
                {
                    alert("you already have that email in your friend list")
                }
                else{
                    db.collection("users").where("email", "==", email1)
                    .get()
                    .then((querySnapshot) => {
                        if (querySnapshot.size == 0)
                        {
                            alert("no email of that kind exist")
                        }
                        else{
                        querySnapshot.forEach((doc) => {
                            db.collection("Requests").doc(email1).update({
                                request: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
                            })
                            alert("friend request sent")
                        });
                      }
                    })
                    .catch((error) => {
                        console.log("Error getting documents: ", error);
                    });
                }
                })   
            }
            setEmail("")
         }
    //the style creation guide that makes the UI of the screen
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Email:</Text>
        <TextInput style={styles.input} 
        placeholder="please insert email in all lowercase" 
        value={email1}
        onChangeText={(text) => setEmail(text)}
        />

        <Button title= "Back to map" onPress={pressHandler}/>
        <View style={styles.space2} />
        <Button title ="send request"
        onPress={requestHandler}/>
        <View style={styles.space2}/>
        </View>
    );

}

//defines the parameter of the style set
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 300,
    },
    space2: {
        width: 10,
        height : 10,
    },
});

