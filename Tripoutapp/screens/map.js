import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { useState } from "react/cjs/react.development";

const api = require("@what3words/api/es2015");
api.setOptions({ key: "4583TEMW" });

const w3wConvert = () => {
  api
    .convertTo3wa({ lat: 51.520847, lng: -0.195521 })
    .then((data) => console.log(data));
};

export default function App({ navigation }) {
  const takePhoto = () => {
    console.log("Take Photo button");
    navigation.navigate("cameraScreen");
  };

  const handlescreen = () => {
    console.log("friends list screen works");
    navigation.navigate("FriendL");
  };

  const handlescreen3 = () => {
    console.log("friends Request screen works");
    navigation.navigate("FriendR");
  };

  const handlescreen4 = () => {
    console.log("Inbox screen works");
    navigation.navigate("Inbox");
  };

  return (
    //w3w test to console

    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 42.318077482044075,
          longitude: -83.2312023143651,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}
      >
        <Marker
          coordinate={{
            latitude: 42.318077482044075,
            longitude: -83.2312023143651,
          }}
          onPress={w3wConvert}
          pinColor="green"
        >
          <Callout>
            <Text>You have a message from Patrick waiting for you!</Text>
          </Callout>
        </Marker>

        <Circle
          center={{
            latitude: 42.318077482044075,
            longitude: -83.2312023143651,
          }}
          radius={1000}
        ></Circle>
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlescreen4} styles={styles.button}>
          <Text style={styles.button}>inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlescreen3}
          styles={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.button}>Friends request</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlescreen}
          styles={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.button}>FriendList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={takePhoto}
          styles={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.button}>Take Photo</Text>
        </TouchableOpacity>
      </View>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  buttonContainer: {
    position: "absolute",
    height: "90%",
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: -5,
  },
  button: {
    backgroundColor: "#339cd4",
    width: "100%",
    padding: 10,
    borderRadius: 10,
    alignItems: "flex-start",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#339cd4",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#339cd4",
    fontWeight: "700",
    fontSize: 16,
  },
});
