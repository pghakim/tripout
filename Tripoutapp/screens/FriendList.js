import React, { useState, useEffect} from "react";
import { StyleSheet, View, Text, Button, TextInput, ScrollView, buttonContainer, FlatList, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/global";
import {db} from '../firebase';
import 'firebase/firestore'
import firebase from "firebase";
import navigation from '../routes/navigation'

function FriendList({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [user, setUsers] = useState([]);

    /*useEffect(() => {
        const unsubscribe = db
        .collection("users")
        .onSnapshot(querySnapshot => {
            const user = [];

            querySnapshot.forEach(doc => {
            user.push({
                ...doc.data(),
                key: doc.id,
            });    
            });

            setUsers(user);
            setLoading(false);
        });

        return() => unsubscribe;
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }*/
    const handlescreen2 = () =>{
        console.log('friends list screen works');
        navigation.navigate('Map')
    }
    return (
        <View style={globalStyles.container}>
        <FlatList
        data={[
            {key: 'Test'},
            {key: 'Test1'},
            {key: 'Test2'},
            {key: 'Test3'},
            {key: 'Test4'},
            {key: 'Test5'}
        ]}
        renderItem={({item}) => <Text style={style.item}>{item.key}</Text>}
        />
        <Button title="delete friend" />
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
})