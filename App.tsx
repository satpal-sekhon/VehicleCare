import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './stacks/HomeStackScreen';
import VehiclesStackScreen from './stacks/VehiclesStackScreen';
import SettingsStackScreen from './stacks/SettingsStackScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MyVehicles') {
              iconName = focused ? 'car' : 'car-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName || ''} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#19535F',
          tabBarInactiveTintColor: '#19535F',
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            bottom: 20,
            left: 25,
            right: 25,
            elevation: 5,
            backgroundColor: '#9CADCE',
            borderRadius: 30,
            height: 60,
          },
          tabBarShowLabel: false,
          headerShown: false,

        })}

      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="MyVehicles" component={VehiclesStackScreen} options={{ headerShown: false, title: 'My Vehicless' }} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
