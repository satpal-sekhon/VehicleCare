import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CustomHeader from "../components/CustomHeader";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MyHome"
        component={HomeScreen}
        options={{ header: () => <CustomHeader title="Home" /> }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;