import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { rank_data } from '../Data/Data';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import Medal from "../../assets/images/Medal.svg";
import Dark_medal from '../../assets/images/dark_medal.svg';
import Weekly_section2 from './Weekly_section2';
import ThemeContext from '../../theme/ThemeContext';

const Weekly = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
     {darkMode? <Dark_medal style={styles.medal} /> : <Medal style={styles.medal} />}
      <View style={styles.stack_container}>
        {
          rank_data.map((d) => (
            <View style={styles.stack} key={d.id}>
              <View style={styles.content}>
                <Image source={d.image} style={styles.image} alt='image' />
                <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
                <View style={styles.box}>
                  <Text style={styles.text}>{d.text}</Text>
                </View>
              </View>
              <View style={styles.image_box}>
              <Image style={[styles.rank, d.id === 6 && styles.rank2]} source={d.Rank} />
              <Text style={styles.rank_no}>{d.value}</Text>
              </View>
            </View>
          ))
        }
      </View>
      <Weekly_section2 />
    </View>
  )
}

export default Weekly;

const styles = StyleSheet.create({
  container: {
    marginTop: 68,
  },
  stack_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },
  medal: {
    position: 'absolute',
    left: '41%',
    top: '-1.5%',
    zIndex: 100,
  },
  stack: {
    width: '33%',
  },
  content: {
    alignItems: 'center',
    gap: 5,
  },
  image: {
    width: 86,
    height: 80,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'BerkshireSwash_400Regular',
  },
  box: {
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#4F22AE',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
    color: '#ffffff',
  },
  rank: {
    width: '100%',
    position: 'relative',
  },
  rank2: {
    position: 'relative',
    marginBottom: -55,
  },
  rank_no: {
    position: 'absolute',
    top: '30%',
    left: '40%',
    color: '#ffffff',
    zIndex: 100,
    fontFamily: 'BerkshireSwash_400Regular',
    fontSize: 55,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})