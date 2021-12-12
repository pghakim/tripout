import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/global";
import {auth, db} from '../firebase';
import 'firebase/firestore'
import {TouchableOpacity } from "react-native-gesture-handler";
import firebase from "firebase";
import firestore from "firebase/firestore"


function FriendList({ navigation }) {
    //important glboal functions to be used for this screen
    const [loading, setLoading] = useState(true);
    const [user, setUsers] = useState([]);
    const [fName, setFNames] = useState("")
    //allows the intializing of the flatlist value of the current user
    //pulls from the array value in the the current user folder and set it to the user that will be used as the key for the flatlist
    useEffect(() => {
        const unsubscribe = db
        .collection("Friends")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
            setUsers(doc.data().friends);
            setLoading(false);  
            });

        return() => unsubscribe;
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }
    //allows the user to press on a name on the list which then shows up in the log box close where the buttons are
    const pressHandler = (id) => {
        console.log(id)
        setFNames(id)
    }
    
    //lets the user navigate back to the map
    const handlescreen2 = () =>{
        console.log('friends list screen works');
        navigation.navigate('Map')
    }
    //code to handle deleting the friend off the friendlist
    //checks if a name was chosen
    //then remove the friend from the array field in the friends collection of the users doc
    //afterwards it makes the text bar empty again and then refresh the list to take into account the changes made
    const handledeletion = () =>{
        if(fName == "")
        {
            alert("please press a name before you delete a friend")
        }
        else {
        alert("you have deleted the user")
        db.collection("Friends").doc(auth.currentUser.email).update({
            friends: firebase.firestore.FieldValue.arrayRemove(fName)
        })
        db.collection("Friends").doc(fName).update({
            friends: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        setFNames("")
        const unsubscribe = db
        .collection("Friends")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
            const user = [doc.data().friends]
            setUsers(doc.data().friends);
            setLoading(false);  
            });
            return() => unsubscribe;
            }
    }
//function that renders all the ui stuff
    return (
        <View style={globalStyles.container}>
        <FlatList
        data={user}
        renderItem={({item}) => (
         <TouchableOpacity onPress={() => pressHandler(item)}>  
        <Text style={style.item}>{item}</Text>
        </TouchableOpacity>
        )}
        />
        <View style={style.logBox}>
        <Text>{fName}</Text>
        </View>
        <Button title="delete friend" onPress={handledeletion} />
        <View style={style.space} />
        <Button title ="Back to map" onPress={handlescreen2} />
        </View>
    );
}
export default  FriendList;
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
        backgroundColor: '#f9f9f9',
      },
})