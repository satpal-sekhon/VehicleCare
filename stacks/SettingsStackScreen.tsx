import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../screens/SettingsScreen";
import CustomHeader from "../components/CustomHeader";

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="MySettings"
        component={SettingsScreen}
        options={{ header: () => <CustomHeader title="Settings" /> }}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;