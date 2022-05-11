import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponetsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import VoteImages from "./src/screens/VoteScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponetsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Vote: VoteImages,
    Color: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
