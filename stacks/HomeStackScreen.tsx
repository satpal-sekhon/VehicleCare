import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="MyHome" component={HomeScreen} options={{title: 'Home'}} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;