import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomHeader from '../components/CustomHeader';

const MyVehiclesScreen: React.FC = ({ navigation }: any) => {
  const handleAddVehicle = () => {
    navigation.navigate('AddVehicle');
  };

  return (
    <View>
      <CustomHeader title="My Vehicles" />

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddVehicle}
        >
          <Icon name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Vehicle</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#19535F',
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
