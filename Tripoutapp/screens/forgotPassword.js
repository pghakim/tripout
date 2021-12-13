import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import navigation from '../routes/navigation'
import {useState} from 'react'
import {auth, db} from '../firebase'
import firebase from "firebase";

//Contacts firebase to send an email with a link to reset password
function forgotPassword({navigation}){
    const [email, setEmail] = useState('')

    const handleReset = () => {
        firebase.auth().sendPasswordResetEmail(email)
        .then(function (user){
            alert('Please check your email')
            navigation.replace("Home")
        })
        .catch(error => alert(error.message))
        };

    return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Forgot Password Screen</Text>
                <TextInput
                placeholder='Email'
                value={email}
                onChangeText={(text => setEmail(text))}
                >
                </TextInput>
                <TouchableOpacity
                onPress={handleReset}
                //onPress={navigation.replace("Home")}
                styles={styles.button}
                >
                    <Text> Reset Password </Text>
                </TouchableOpacity>

            </View>
        )

};

export default forgotPassword

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