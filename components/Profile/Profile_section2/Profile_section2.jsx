import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { profile_tab_data } from '../../../Data/Data';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';
import ThemeContext from '../../../theme/ThemeContext';

const Profile_section2 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <View style={[styles.tab_container, {backgroundColor:theme.card}]}>
        {
            profile_tab_data.map((d) => (
                <TouchableOpacity 
                    style={[
                        styles.tab, 
                        d.id === 2 && styles.middleTab 
                    ]} 
                    key={d.id}
                >
                    {d.icon}
                    <Text style={styles.name}>{d.heading}</Text>
                    <Text style={styles.value}>{d.value}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Profile_section2;

const styles = StyleSheet.create({
    tab_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F22AE',
        borderRadius: 20,
        paddingVertical: 16,
        width: '100%',
    },
    tab: {
        minWidth: '33%',
        gap: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    middleTab: {
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderColor: '#ffffff',
    },
    name: {
        fontSize: 10,
        lineHeight: 20,
        fontFamily: 'Poppins_700Bold',
        color: '#FFFFFF',
    },
    value: {
        fontSize: 10,
        lineHeight: 20,
        fontFamily: 'Poppins_700Bold',
        color: '#ffffff',
    }
})
