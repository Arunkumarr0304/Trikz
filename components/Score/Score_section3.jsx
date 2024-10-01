import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { Again } from '../Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import ThemeContext from '../../theme/ThemeContext';

const Score_section3 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={styles.stack_container}>
        {
            Again.map((d) => (
                <View style={styles.stack} key={d.id}>
                    <View style={styles.icon_box}>
                    {d.icon}
                    </View>
                    <TouchableOpacity style={styles.stack2}>
                        <Text style={styles.text}>{d.text}</Text>
                    </TouchableOpacity>
                </View>
            ))
        }
      </View>
    </View>
  )
}

export default Score_section3;

const styles = StyleSheet.create({
    stack_container: {
        gap: 16,
        marginBottom: '18%',
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        width: '100%',
    },
    icon_box: {
        width: '10%',
    },
    stack2: {
        borderRadius: 30,
        backgroundColor: '#6829C6',
        paddingVertical: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        color: '#ffffff',
        textAlign: 'center',
    }
})