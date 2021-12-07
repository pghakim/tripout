import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/login";
import MapDisplay from "../screens/map";
import FriendList from "../screens/FriendList";
import FriendRequest from "../screens/FriendRequest";
import Messages from "../screens/Messages";
import PhotoDisplay from "../screens/photo";
import forgotPassword from "../screens/forgotPassword";
import Register from "../screens/Register";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Welcome to Trip Out",
    },
  },
  Map: {
    screen: MapDisplay,
    navigationOptions: {
      headerShown: false,
    },
  },
  FriendL: {
    screen: FriendList,
    navigationOptions: {
      title: "Friend List",
    },
  },
  FriendR: {
    screen: FriendRequest,
    navigationOptions: {
      title: "Friend Requests",
    },
  },
  Inbox: {
    screen: Messages,
  },
  ForgotPassword: {
    screen: forgotPassword
  },
  Register: {
    screen: Register
  },
  cameraScreen: {
    screen: PhotoDisplay,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
