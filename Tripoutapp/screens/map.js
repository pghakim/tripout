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
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { db, auth } from "../firebase";
export const mapRef = React.createRef();
const api = require("@what3words/api/es2015");
api.setOptions({ key: "4583TEMW" });


const w3wConvert = () => {
  api
    .convertTo3wa({ lat: 51.520847, lng: -0.195521 })
    .then((data) => console.log(data));
};


export default function App({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latc, setLatC] = useState(0);
  const [longc, setLongC] = useState(0);
  const [userF, setUserF] = useState([]);
  const [userI, setUserI] = useState([]);

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function (user) {
      alert("You Have Successfully Logged Out");
      navigation.replace("Home");
    })
    .catch((error) => alert(error.message));
};

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      /*db
        .collection("Friends")
        .doc(auth.currentUser.email).get()
        .then((doc) => {
          setUserF(doc.data().friends)
          console.log(doc.data().friends)
          doc.data().friends.forEach(Element => {
            db.collection("Images").doc(Element).get().then((doc) => {
              console.log(Element)
              setUserI(doc.data().url)
              console.log(userI)
              console.log(doc.data().url)
            })
          })
        })*/

      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({ accuracy: 2 }); // Location to the nearest km.
      if (location.coords?.latitude && location.coords?.longitude) {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        var lat = location.coords?.latitude;
        var long = location.coords?.longitude;
        mapRef.current.animateToRegion({
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    })();
  }, []);

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
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={"google"}
        initialRegion={{
          latitude: 44.3148,
          longitude: -84.6024,
          latitudeDelta: 6.0,
          longitudeDelta: 6.0,
        }}
        showsCompass={false}
        rotateEnabled={false}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        mapType={"hybrid"}
      ></MapView>
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
        <TouchableOpacity
          onPress={signOut} 
          styles={[styles.button]}
        >
          <Text styles={styles.buttonText}>Signout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
//export {latc, longc};
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
