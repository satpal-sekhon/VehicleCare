import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddVehicleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Vehicle</Text>
      {/* Add form or input components for adding a new vehicle */}
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
