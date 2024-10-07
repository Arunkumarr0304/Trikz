import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import { friend_data2 } from '../../Data/Data';
import { Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import ThemeContext from '../../theme/ThemeContext';

const Weekly_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={[styles.stack_container, {backgroundColor:theme.cardbg}]}>
        {
            friend_data2.map((d) => (
                <TouchableOpacity style={[styles.stack, {backgroundColor:theme.background}]} key={d.id}>
                    <View style={[styles.circle, {borderColor:theme.bordercolor}]}>
                    <Text style={[styles.number, {color:theme.bordercolor}]}>{d.id}</Text>
                    </View>
                    <Image source={d.image} style={styles.image} />
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

export default Weekly_section2;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 160,
    },
    stack_container: {
        backgroundColor: '#EFEEFC',
        borderRadius: 15,
        padding: 15,
        gap: 16,
        marginTop: -150,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 16,
    },
    circle: {
        borderRadius: 50,
        borderColor: '#808080',
        borderWidth: 1,
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: '#808080',
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins_500Medium',
    },
    image: {
        width: 60,
        height: 60,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
        color: '#858494',
    }
})