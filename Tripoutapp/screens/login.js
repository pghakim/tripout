import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { globalStyles } from "../styles/global";

const api = require("@what3words/api/es2015");
api.setOptions({ key: "4583TEMW" });

export default function Home({ navigation }) {
  const login = () => {
    navigation.navigate("Map");
  };

  const w3wConvert = () => {
    api
      .convertTo3wa({ lat: 51.520847, lng: -0.195521 })
      .then((data) => console.log(data));
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

      <Button title="Login" onPress={login} />
      <View style={styles.space} />
      <Button title="Sign Up" onPress={w3wConvert} />
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
