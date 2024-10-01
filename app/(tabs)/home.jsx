import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Coin from "../../assets/images/coin.svg";
import Home_profile from "../../assets/images/home_profile.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { useRouter } from "expo-router";
import Button from '../../components/Button/Button';
import Home_section2 from '../../components/Home/Home_section2/Home_section2';
import Home_section3 from '../../components/Home/Home_section3/Home_section3';
import ThemeContext from '../../theme/ThemeContext';

const Home = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const router = useRouter(); 

  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
      <View style={styles.header}>
        <View style={styles.left}>
            <Text style={[styles.heading, {color:theme.color}]}>Madelyn Dias</Text>
            <TouchableOpacity style={styles.box}>
                <Coin />
                <Text style={styles.currency}>550</Text>
            </TouchableOpacity>
        </View>
        <Home_profile />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button buttonText="play" onPress={() => {router.push('(screens)/paginationscreens')}} />
        <Home_section2 />
        <Home_section3 />
      </ScrollView>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    left: {
        gap: 5,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 5,
        backgroundColor: '#4F22AE',
        width: 100,
        height: 30,
    },
    currency: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
    }
});
