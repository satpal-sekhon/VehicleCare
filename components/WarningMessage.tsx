import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface WarningMessageProps {
  text: string;
  close: () => void;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ text, close }) => {
  return (
    <TouchableOpacity onPress={close} activeOpacity={0.8}>
      <View style={styles.warningContainer}>
        <Text style={styles.warningText}>{text}</Text>
        <Icon name="close" size={24} color="#fff" style={styles.closeIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  warningContainer: {
    backgroundColor: '#FFCC00',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  warningText: {
    color: '#fff',
    marginRight: 8,
  },
  closeIcon: {
    color: '#fff',
    fontSize: 14
  }
});

export default WarningMessage;