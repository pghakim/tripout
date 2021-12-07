import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
import {db, auth} from '../firebase';
import firestore from "firebase/firestore"
import firebase from "firebase";
import 'firebase/firestore'



 function Messages({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [from, setFrom] = useState("");

    //allows the intializing of the flatlist value of the current user
    //pulls from the array value in the the current user folder and set it to the user that will be used as the key for the flatlist
    useEffect(() => {
        const unsubscribe = db
        .collection("Requests")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
            setUsers(doc.data().request);
            setLoading(false);  
            });

        return() => unsubscribe;
    }, []);

    //returns the loading screen
    if (loading) {
        return <ActivityIndicator />;
    }

    //allows the user to press on a name on the list which then shows up in the log box close where the buttons are
    const pressHandler = (id) => {

        console.log("you have managed to press ", id)
        setFrom(id);
    }
    const handlescreen2 = () =>{
        console.log('friends list screen works');
        navigation.navigate('Map')
    }
    //handle fuction for the request function
    //first it checks if the text box is empty
    //adds sender email to the current user doc in the friend collection and vice versa
    //then it deletes the request from the current user request doc and then refersh the list
    const handleaccept = () => {
        if (from == "")
        {
            console.log("please tap a name before you select")
        }
        else{
        alert("you pressed the accept button");
        console.log("you have accepted ", from, "as your new friend")
        db.collection("Friends").doc(from).update({
            friends: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        db.collection("Friends").doc(auth.currentUser.email).update({
            friends: firebase.firestore.FieldValue.arrayUnion(from)
        })
        db.collection("Requests").doc(auth.currentUser.email).update({
            request: firebase.firestore.FieldValue.arrayRemove(from)
        })
        setFrom("")
        const unsubscribe = db
        .collection("Requests")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
            const user = [doc.data().request]  
            setUsers(doc.data().request);
            setLoading(false);  
            });

        return() => unsubscribe;
            }
    }
    //identical to the friend accept function but it just removes the request without changing any of the friend docs
    const handledeny = () => {
        if (from == "")
        {
            console.log("please tap a name before you select")
        }
        else{
        alert("you pressed the deny friend request button")
        console.log("you have denied ", from, " request")
        db.collection("Requests").doc(auth.currentUser.email).update({
            request: firebase.firestore.FieldValue.arrayRemove(from)
        })
        setFrom("")
        const unsubscribe = db
        .collection("Requests")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
            const user = [doc.data().request]
            /*user.push({
                ...doc.id()
                key: doc.
            });*/  
            setUsers(doc.data().request);
            setLoading(false);  
            });

        return() => unsubscribe;
        }
    }
    return (
        <View style={globalStyles.container}>
        <FlatList
        data={users}
        renderItem={({item}) => (
         <TouchableOpacity onPress={() => pressHandler(item)}>  
        <Text style={style.item}>{item }</Text>
        </TouchableOpacity>
        )}
        />
        <View style={style.logBox}>
            <Text>{from}</Text>
        </View>
        <Button title="accept friend request" onPress={handleaccept} />
        <View style={style.space} />
        <Button title="deny friend request" onPress={handledeny} />
        <View style={style.space} />
        <Button title ="Back to map" onPress={handlescreen2} />
        </View>
    );
}
export default Messages;
const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    space: {
        width: 10,
    },
    title: {
        fontSize: 32,
      },
      logBox: {
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f0f0f0',
        backgroundColor: '#f9f9f9'
      },
})