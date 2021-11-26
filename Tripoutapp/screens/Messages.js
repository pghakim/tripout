import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, FlatList, TouchableHighlight } from "react-native";
import { globalStyles } from "../styles/global";
import FriendRequest from "./FriendRequest"; 

//haven't implemented the actual friend request functionality but the main buttons have been made
//the user will click user who sent them a friend request and then either press the accept button or the decline button
export default function Messages({ navigation }) {
    const pressHandler5 = () => {
        navigation.navigate("Map");
      }
const acceptHandler = () => {
    console.log("the friend request was accepted");
}

const declineHandler = () => {
    console.log("the friend request was declined");
}
return(
    <View style={styles.container3}>
    <FlatList
    data={[
        {key: 'Bob'},
    ]}
    renderItem={({item}) => <Text 
    onResponderGrant

    style={styles.item}>{item.key}</Text>}
    />
 <Button title ="back to map" onPress={pressHandler5}/>
 <View style={styles.space5} />
 <Button title = "accept request" />
 <View style={styles.space5} />
 <Button title = "decline request" />
 </View>
    );
}

const styles = StyleSheet.create({
    space5: {
        width: 10,
    },
    container3: {
        flex: 1,
        paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});