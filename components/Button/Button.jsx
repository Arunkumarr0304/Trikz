import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = ({ buttonText, onPress, backgroundColor, textColor, borderColor, borderRadius }) => {
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          
          backgroundColor: backgroundColor || 'rgba(92, 38, 186, 1)',
        
          borderColor: borderColor || 'rgba(92, 38, 186, 1)', 

          borderRadius: borderRadius || 10,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || '#ffffff' }]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    textTransform: 'capitalize',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'BerkshireSwash_400Regular',
  },
});

export default Button;
