import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';

const Pagination_screens1 = ({ data }) => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_stack, setActive_stack] = useState(data.options[0].id);
    const press = (id) => {
        setActive_stack(id);
    };
  return (
    <View style={styles.page_container}>
      <Text style={[styles.heading, {color:theme.color2}]}>{data.heading}</Text>
      <Image source={data.image} style={styles.image} />
      <View style={styles.stack_container}>
        {data.options.map((option) => (
          <TouchableOpacity style={[styles.stack,active_stack === option.id && styles.active_stack ]} onPress={() => {press(option.id)}} key={option.id}>
            <Text style={[styles.stack_text,active_stack === option.id && styles.active_text]}>{option.option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page_container: {
    marginVertical: 33,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#461799',
    marginBottom: 13,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 210,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  stack_container: {
    flexDirection: 'column',
    gap: 10,
  },
  stack: {
    padding: 14,
    borderRadius: 15,
    borderColor: '#6835B6',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stack_text: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#4F22AE',
    textTransform: 'capitalize',
  },
  active_stack: {
    backgroundColor: '#4F22AE',
  },
  active_text: {
    color: "#ffffff",
  }
});

export default Pagination_screens1;
