import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="MySettings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;