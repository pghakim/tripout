import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import navigation from "../routes/navigation";
const api = require("@what3words/api/es2015");
api.setOptions({ key: "4583TEMW" });

export default function displayImage({ navigation }) {
  const w3wAddress = api.convertTo3wa({
    lat: navigation.getParam("latObj"),
    lng: navigation.getParam("longObj"),
  });
  useEffect(() => {});
  return (
    <View>
      <Image
        style={styles.photo}
        source={{
          uri: navigation.getParam("uriObj"),
        }}
      ></Image>
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
  photo: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

{
  /* <Text
        style={{
          color: "#fff",
          fontSize: 20,
        }}
      > {JSON.stringify(w3wAddress)}</Text> */
}
