import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  AppRegistry,
  Image,
  TouchableOpacity,
} from "react-native";

export default function displayImage({ navigation }) {
  return (
    <View>
      <Image
        style={styles.photo}
        source={{
          uri: navigation.getParam("uriObj"),
        }}
      />
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
