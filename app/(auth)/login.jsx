import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useFonts, BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Log_bg from "../../assets/images/log_page.png";
import { log_method } from '../../Data/Data';
import {router, Link} from "expo-router";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';
import ThemeContext from '../../theme/ThemeContext';

const Login = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  let [fontsLoaded] = useFonts({
    BerkshireSwash_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
    BerkshireSwash_400Regular,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
         <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="light-content"
            />
      <Image source={Log_bg} alt='image' style={styles.bg} />
      <View style={[styles.content, {backgroundColor:theme.background}]}>
        <Text style={[styles.heading, {color:theme.color}]}>Login With Your Account</Text>
        <View style={styles.tab_container}>
          {log_method.map((d) => (
            <TouchableOpacity style={styles.tab} key={d.id} onPress={() => {router.push('language')}}>
              {d.icon}
              <Text style={styles.tab_text}>{d.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: '#ffffff',
    width: '100%',
    bottom: 0,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#000000',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  tab_container: {
    marginVertical: 43,
    gap: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: 'rgba(92, 38, 186, 1)',
    gap: 14,
  },
  tab_text: {
    fontSize: 16,
    lineHeight: 28,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#ffffff',
  },
});
