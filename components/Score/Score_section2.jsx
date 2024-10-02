import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useContext } from 'react';
import { tab_container_data } from '../Data/Data';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import ThemeContext from '../../theme/ThemeContext';

const Score_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);

    const getTextColor = (id) => {
        switch(id) {
            case 1:
                return '#00D709';
            case 2:
            case 3:
                return '#FFC700';
            default:
                return '#E31D1C';
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.stack_container}>
                {
                    tab_container_data.map((d) => (
                        <TouchableOpacity style={[styles.stack, {backgroundColor: theme.color3}]} key={d.id}>
                            <View style={styles.left}>
                                <Text style={[styles.value,darkMode && {color: getTextColor(d.id)}]}>{d.value}</Text>
                                <Text style={[styles.text]}>{d.text}</Text>
                            </View>
                            <View style={styles.icon}>
                                {darkMode ? d.Dark_icon : d.icon}
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default Score_section2;

const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stack_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 16,
    },
    stack: {
        backgroundColor: 'rgba(79, 34, 174, 0.1)',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '60%',
        padding: 10,
        width: '47%',
    },
    left: {
        justifyContent: 'center',
        paddingHorizontal: 6,
    },
    icon: {
    
    },
    value: {
        fontSize: 30,
        lineHeight: 40,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#4F22AE',
    },
    text: {
        fontSize: 12,
        lineHeight: 24,
        fontFamily: 'Poppins_400Regular',
    }
});
