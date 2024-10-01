import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Language_bg from "../../assets/images/language_page.png";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Button from "../../components/Button/Button";
import {router, Link} from "expo-router";
import Input from '../../components/Input/Input';
import ThemeContext from '../../theme/ThemeContext';

const Nick_name = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container]}> 
    <Image source={Language_bg} style={styles.bg} />
    <View style={[styles.content, {backgroundColor:theme.background}]}>
        <Text style={[styles.heading, {color:theme.color}]}>Create Nickname</Text>
        <View style={styles.input_container}>
            <Input placeholder="Your Nick Name" />
        </View>
        <Button buttonText="submit" onPress={() => {router.push('home')}} />
    </View>
    </View>
  )
}

export default Nick_name;

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
        paddingTop: 30,
        paddingBottom: 50,
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
    input_container: {
        paddingBottom: 30,
    }
})