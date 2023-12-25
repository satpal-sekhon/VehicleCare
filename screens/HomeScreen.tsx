import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="home" size={30} color="#900" />

      <Text style={styles.text}>Welcome to Your App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;