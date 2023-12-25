import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';


const MyVehiclesScreen: React.FC = ({ navigation }: any) => {
  const handleAddVehicle = () => {
    // Navigate to the "Add Vehicle" screen
    navigation.navigate('AddVehicle');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Vehicles</Text>

      {/* Add your vehicle information or components here */}

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddVehicle}
      >
        <Icon name="add" size={24} color="white" />
        <Text style={styles.addButtonText}>Add Vehicle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'green', // Customize the button color
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default MyVehiclesScreen;
