import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { friend_data } from '../../Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import ThemeContext from '../../../theme/ThemeContext';

const Home_section3 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, {color:theme.color}]}>Friends</Text>
      <View style={styles.stack_container}>
        {
            friend_data.map((d) => (
                <TouchableOpacity style={styles.stack} key={d.id}>
                    <Image source={d.image} alt='image' style={styles.image} />
                    <View style={styles.content}>
                        <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
                        <Text style={styles.text}>{d.text}</Text>
                    </View>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Home_section3;

const styles = StyleSheet.create({
    container: {

    },
    heading: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#0C092A',
        textTransform: 'capitalize',
    },
    stack_container: {
        marginVertical: 16,
        gap: 20,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    image: {
        width: 60,
        height: 60,
    },
    content: {

    },
    name: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        color: '#858494',
    }
})