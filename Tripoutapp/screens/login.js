import React from 'react'
import {useState, useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth, db} from '../firebase'
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import * as firebase from 'firebase'
import 'firebase/firestore'
import navigation from '../routes/navigation';
import { NavigationEvents } from 'react-navigation';

function LoginScreen ({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                console.log('Reached This Point')
            }
        })
        return unsubscribe
    }, []);

    /*const handleSignUp = () =>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Registered with:', user.email)
            db.collection("users").add({
            email: email  
            })
            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            navigation.replace("Map")
        })
        .catch(error => alert(error.message))
    };*/

    //Function to contact firebase auth and confirm a registered user
    const handleLogin = () =>{
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials =>{
            const user = userCredentials.user;
            console.log('Logged in with :', user.email)
            navigation.replace("Map")
        })
        
    .catch(error => alert(error.message))
    };

    //Redirectes user to the Forgot Password Page
    const handleForgotPassword = () =>{
        navigation.navigate("ForgotPassword")
    }
    
    //Redirects user to the Registration page
    const userRegistration = () => {
        navigation.navigate("Register")
    }


    return (
        //<KeyboardAvoidingView style={styles.container} behavior="padding">
            <View styles={styles.inputContainer}>
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
                onPress={handleLogin}
                styles={styles.button}
                >
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={userRegistration}
                styles={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.button}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleForgotPassword}
                styles= {styles.button}
                >
                    <Text>Forgot Password?</Text>    
                </TouchableOpacity>
            </View>
            </View>
    );
};

export default LoginScreen;

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
})