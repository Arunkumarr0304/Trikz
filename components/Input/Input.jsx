import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useState, useRef } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const Input = ({
  label,
  placeholder,
  keyboardType,
  borderRadius,
  borderColor,
  width,
  Icon,
}) => {
  const { theme } = useContext(ThemeContext);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const placeholderColor = '#808080';

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <View>
      <View style={styles.inputBox}>
        <Text style={[styles.label, { color: theme.color }]}>{label}</Text>
        <TouchableWithoutFeedback onPress={handleFocus}>
          <View style={styles.inputWrapper}>
            <TextInput
              ref={inputRef}
              style={[
                styles.input,
                {
                  color:theme.color,
                  borderRadius: borderRadius || 10,
                  borderColor: borderColor || 'rgba(92, 38, 186, 1)',
                  backgroundColor: 'transparent',
                  width: width || '100%',
                },
              ]}
              placeholder=""
              keyboardType={keyboardType}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={inputValue}
              onChangeText={setInputValue}
            />
            {!isFocused && !inputValue && (
              <Text
                style={[
                  styles.placeholder,
                  {
                    color: placeholderColor,
                    fontFamily: 'BerkshireSwash_400Regular',
                  },
                ]}
              >
                {placeholder}
              </Text>
            )}
            {Icon && <Icon style={styles.icon} />}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputBox: {
    gap: 5,
  },
  label: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#121212',
    textTransform: 'capitalize',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderWidth: 2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'BerkshireSwash_400Regular',
  },
  placeholder: {
    position: 'absolute',
    left: 100,
    top: '50%',
    transform: [{ translateY: -12 }],
    fontSize: 16,
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: '56%',
    transform: [{ translateY: -12 }],
  },
});
