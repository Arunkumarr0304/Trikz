import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { edit_data } from '../../../Data/Data';
import ThemeContext from '../../../theme/ThemeContext';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const Profile_section6 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_stack, setActive_stack] = useState(edit_data[0].id);
    const press = (id) => {
        setActive_stack(id);
    };
  return (
    <View style={styles.container}> 
      <View style={styles.stack_Container}>
        {
            edit_data.map((d) => (
                <TouchableOpacity style={[[styles.stack, {backgroundColor:theme.color1}], active_stack === d.id && styles.active_stack]} key={d.id} onPress={() => {press(d.id)}}>
                    <View style={styles.row}>
                        <Text style={[[styles.no, {color:theme.color}], active_stack === d.id && styles.active_no]}>{d.no}</Text>
                        {active_stack === d.id || darkMode? d.Dark_icon : d.icon}
                    </View>
                    <Text style={[[styles.text, {color:theme.color}],active_stack === d.id && styles.active_text]}>{d.text}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

export default Profile_section6;

const styles = StyleSheet.create({
    stack_Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        gap: 16,
        marginTop: 25,
    },
    stack: {
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        minWidth: '52%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
    },
    no: {
        fontSize: 32,
        lineHeight: 48,
        fontFamily: 'Poppins_700Bold',
        color: '#0C092A',
    },
    text: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
        color: '#0C092A',
    },
    active_stack: {
         backgroundColor: '#4F22AE',
    },
    active_no: {
        color: '#ffffff',
    },
    active_text: {
        color: "#ffffff",
    }
})