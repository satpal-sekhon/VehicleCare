import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface CustomHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="chevron-back" size={24} color="#fff" style={styles.backIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#19535F',
  },
  backIcon: {
    marginRight: 10,
  },
  title: {
    flex: 1, // Ensure the title takes up available space vertically
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', // Center the title horizontally
  },
  userIcon: {
    backgroundColor: '#9CADCE',
    borderRadius: 500,
    padding: 8,
    marginLeft: 10,
    fontSize: 16,
  },
});

export default CustomHeader;
