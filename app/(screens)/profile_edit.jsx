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
import Camera from "../../assets/images/camera.svg";
import Input from '../../components/Input/Input';
import LanguageDropdown from '../../components/LanguageDropdown/LanguageDropdown';
import Button from '../../components/Button/Button';
import AgeDropdown from '../../components/AgeDropdown/AgeDropdown';

const Profile_Edit = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {router.push('profile')}}>
         {darkMode? <Dark_back /> : <Back />}
          </TouchableOpacity>
          <Text style={[styles.heading, {color:theme.color}]}>profile</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
            <View style={styles.image_box}>
          <Image style={styles.image} source={Profiles} />
          <Camera style={styles.camera} />
          </View>
        </View>
        <View style={styles.input_container}>
            <Input label="Change Nickname"  placeholder="jhon" />
            <AgeDropdown label="Change Age" />
            <LanguageDropdown label="Select Lanugage" />
        </View>
        </ScrollView>
        <View style={styles.button_box}>
        <Button buttonText="Save" onPress={() => {router.push('profile')}} />
        </View>
    </View>
  )
}

export default Profile_Edit;

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
  content: {
    alignItems: 'center',
    marginVertical: 30,
  },
  image_box: {
    maxWidth: 92,
    maxHeight: 92,
  },
  image: {
    width: 92,
    height: 92,
    borderRadius: 50,
    borderWidth: 7,
    borderColor: '#4F22AE',
    position: 'relative',
  },
  camera: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    borderWidth: 5,
    borderColor: '#4F22AE',
  },
  name_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input_container: {
    gap: 16,
  },
  button_box: {
    marginBottom: '15%',
  }
})