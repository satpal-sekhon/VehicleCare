import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const AddVehicleScreen: React.FC = ({ navigation }: any) => {
  return (
    <View>
      <CustomHeader title="Add Vehicle" onBackPress={() => navigation.navigate('Vehicles')} />

      <View style={styles.container}>
        <Text style={styles.title}>Add Vehicle</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AddVehicleScreen;
