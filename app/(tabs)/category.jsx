import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import {router,Link} from "expo-router";
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Home_section2 from '../../components/Home/Home_section2/Home_section2';
import Home_section3 from '../../components/Home/Home_section3/Home_section3';
import ThemeContext from '../../theme/ThemeContext';

const Category = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
        <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
        <TouchableOpacity onPress={() => {router.push('home')}}>
         {darkMode? <Dark_back /> : <Back />}
          </TouchableOpacity>
            <Text style={[styles.heading, {color:theme.color}]}>category</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Home_section2 />
            <Home_section3 />
        </ScrollView>
    </View>
  )
}

export default Category;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        position: 'absolute',
        left: '38%',
    }
})