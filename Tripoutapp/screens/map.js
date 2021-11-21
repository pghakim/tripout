import * as React from "react";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, AppRegistry } from "react-native";

const api = require("@what3words/api/es2015");
api.setOptions({ key: "4583TEMW" });

const w3wConvert = () => {
  api
    .convertTo3wa({ lat: 51.520847, lng: -0.195521 })
    .then((data) => console.log(data));
};

export default function App() {
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
});
