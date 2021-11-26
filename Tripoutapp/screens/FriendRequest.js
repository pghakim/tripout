import React, { useReducer, useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";
import {db} from '../firebase';
import { counterEvent } from "react-native/Libraries/Performance/Systrace";


//start of the app building code
export default function FriendRequest({ navigation }) {
    //code to handle navigation to the map screen
    const pressHandler = () => {
      navigation.navigate("Map");
    };
    const requestHandler = () => {
        db.collection("users").where("email", "==", email1)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log("friend request sent")
                console.log(doc.id, " => ", doc.data());
            });
        }) 
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    const [email1, getEmail] = useState("");
    //the style creation guide that makes the UI of the screen
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Email:</Text>
        <TextInput style={styles.input} 
        placeholder="Email" 
        value={email1}
        onChangeText={(text) => getEmail(text)}
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
        width: 200,
    },
    space2: {
        width: 10,
        height : 10,
    },
});
