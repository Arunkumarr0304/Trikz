import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import Arrow from "../../../assets/images/arrow.svg";
import { stack_data } from '../../../Data/Data';
import ThemeContext from '../../../theme/ThemeContext';

const Home_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.heading, {color:theme.color}]}>Quiz</Text>
        <Text style={styles.see}>See all</Text>
      </View>
      <View style={styles.stack_container}>
        {
            stack_data.map((d) => (
                <TouchableOpacity style={styles.stack} key={d.id} >
                    <View style={styles.left}>
                        {d.icon}
                        <View style={styles.content}>
                            <Text style={[styles.name, {color:theme.color}]}>{d.name}</Text>
                            <Text style={styles.text}>{d.text}</Text>
                        </View>
                    </View>
                    <Arrow />
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Home_section2;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    see: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Poppins_500Medium',
        color: '#6A5AE0',
    },
    stack_container: {
        marginVertical: 16,
        gap: 16,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2.5,
        borderColor: '#EFEEFC',
        borderRadius: 10,
        padding: 8,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'BerkshireSwash_400Regular',
        textTransform: 'capitalize',
    },
    text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        color: '#808080',
    }
})