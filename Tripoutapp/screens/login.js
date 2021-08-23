import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.navigate("Map");
  };

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Username:</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <Text style={globalStyles.titleText}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Button title="Login" onPress={pressHandler} />
      <View style={styles.space} />
      <Button title="Sign Up" />
    </View>
  );
}

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
  space: {
    width: 20,
    height: 20,
  },
});
