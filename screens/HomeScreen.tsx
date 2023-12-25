import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WarningMessage from '../components/WarningMessage';

const HomeScreen: React.FC = () => {

  const handleWarningClick = () => {
    console.log('Warning clicked. Hiding message.');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.helloName}>Hello Satpal 👋</Text>
      <WarningMessage text='PUC is expiring in 15 days' close={handleWarningClick} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  helloName: {
    color: '#333',
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '700'
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;
