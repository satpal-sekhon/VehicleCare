import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const AddVehicleScreen: React.FC = ({ navigation }: any) => {
  return (
    <View>
      <CustomHeader title="Add Vehicle" onBackPress={() => navigation.navigate('Vehicles')} />

      <View style={styles.container}>
        <Text style={styles.title}>Select Vehicle Category</Text>

        <View style={styles.categoriesContainer}>
          <View style={styles.categoryContainer}>
            <Image source={require(`../assets/car.jpg`)} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 1</Text>
          </View>

          <View style={styles.categoryContainer}>
            <Image source={require(`../assets/car.jpg`)} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>Category 2</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  categoriesContainer: {
    flexDirection: 'row', // Display categories in a row
    justifyContent: 'space-around',
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    margin: 8
  },
  categoryImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  categoryTitle: {
    fontSize: 16,
    margin: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333'
  },
});

export default AddVehicleScreen;
