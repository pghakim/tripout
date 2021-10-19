import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/login";
import MapDisplay from "../screens/map";

const screens = {
  Home: {
    screen: Home,
  },
  Map: {
    screen: MapDisplay,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
