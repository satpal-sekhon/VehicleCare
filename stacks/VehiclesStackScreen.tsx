import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyVehiclesScreen from "../screens/MyVehiclesScreen";
import AddVehicleScreen from "../screens/AddVehicleScreen";
import CustomHeader from "../components/CustomHeader";

const VehiclesStack = createNativeStackNavigator();

function VehiclesStackScreen() {
  return (
    <VehiclesStack.Navigator>
      <VehiclesStack.Screen
        name="Vehicles"
        component={MyVehiclesScreen}
        options={{ header: () => <CustomHeader title="My Vehicles" /> }}
      />
      <VehiclesStack.Screen
        name="AddVehicle"
        component={AddVehicleScreen}
      />
    </VehiclesStack.Navigator>
  );
}

export default VehiclesStackScreen;