import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyVehiclesScreen from "../screens/MyVehiclesScreen";
import AddVehicleScreen from "../screens/AddVehicleScreen";

const VehiclesStack = createNativeStackNavigator();

function VehiclesStackScreen() {
  return (
    <VehiclesStack.Navigator>
      <VehiclesStack.Screen
        name="Vehicles"
        component={MyVehiclesScreen}
        options={{ headerShown: false }}
      />
      <VehiclesStack.Screen
        name="AddVehicle"
        component={AddVehicleScreen}
        options={{ headerShown: false }}
      />
    </VehiclesStack.Navigator>
  );
}

export default VehiclesStackScreen;