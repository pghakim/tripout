import React from 'react'
import {useState, useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth, db} from '../firebase'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as firebase from 'firebase'
import 'firebase/firestore'
import navigation from '../routes/navigation';
import { NavigationEvents } from 'react-navigation';

function RegisterScreen ({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [f, setf] = useState([])

    const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Registered with:', user.email)
            db.collection("users").doc(user.email).set({
                email: user.email,
                username: displayName,
                })
                .then((username) => {
                    console.log("Document written with ID: ", username);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
                db.collection("Friends").doc(user.email).set({
                    friends: f
                })
                .then((username) => {
                    console.log("Document written with ID: ", user.email);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
                db.collection("Requests").doc(user.email).set({
                    request: f
                })
                .then((username) => {
                    console.log("Document written with ID: ", user.email);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
                db.collection("Images").doc(user.email).set({
                 url: f,   
                 Latitude: f,
                 Longitude: f
                })
                
            navigation.replace("Map")
        })
        .catch(error => alert(error.message))
    };
    return (
        <View styles={styles.inputContainer}>
            <TextInput
            placeholder= 'User Name'
            style={styles.input}
            value={displayName}
            onChangeText={text => setDisplayName(text)}
            />
            <TextInput 
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text) }
            style={styles.input}
            />
            <TextInput 
            placeholder='Password'
             value={password}
             onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleSignUp}
                style={styles.button}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
        //<View style={styles.buttonContainer}>
     //</View>
);
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical:10,
        marginTop: 5,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor: '#339cd4',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },

    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#339cd4',
        borderWidth: 2,
    },
    buttonOutlineText:{
        color: '#339cd4',
        fontWeight: '700',
        fontSize: 16,
    }
});