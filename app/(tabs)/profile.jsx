import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Profiles from "../../assets/images/profile_img.png";
import Edit from "../../assets/images/edit.svg";
import Dark_edit from "../../assets/images/dark_edit.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Profile_section2 from '../../components/Profile/Profile_section2/Profile_section2';
import Profile_section3 from '../../components/Profile/Profile_section3/Profile_section3';
import ThemeContext from '../../theme/ThemeContext';
import Profile_section4 from '../../components/Profile/Profile_section4/Profile_section4';
import {router, Link} from "expo-router";

const Profile = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {router.push('home')}}>
         {darkMode? <Dark_back /> : <Back />}
          </TouchableOpacity>
          <Text style={[styles.heading, {color:theme.color}]}>profile</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image style={styles.image} source={Profiles} />
          <View style={styles.name_row}>
          <Text style={[styles.heading2, {color:theme.color}]}>Jhon</Text>
         {darkMode? <Dark_edit /> : <Edit />}
          </View>
        </View>
        <Profile_section2 />
        <Profile_section3 />
        <Profile_section4 />
        </ScrollView>
    </View>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
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
    left: '40%',
  },
  heading2: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
  },
  content: {
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: '#4F22AE',
  },
  name_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  }
})