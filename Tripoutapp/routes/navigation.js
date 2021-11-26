import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/login";
import MapDisplay from "../screens/map";
import FriendList from "../screens/FriendList";
import FriendRequest from "../screens/FriendRequest";
import Messages from "../screens/Messages";


const screens = {
  Home: {
    screen: Home,
  },
  Map: {
    screen: MapDisplay,
  },
  FriendL: {
    screen: FriendList,
  },
  FriendR: {
    screen: FriendRequest,
  },
  Inbox: {
    screen: Messages
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
