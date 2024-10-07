import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Again } from '../Data/Data';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import ThemeContext from '../../theme/ThemeContext';
import Score_section4 from './Score_section4';

const Score_section3 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [modalVisible2, setModalVisible2] = useState(null);
    const press = () => {
        setModalVisible2(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.stack_container}>
                {Again.map((d) => (
                    <View style={styles.stack} key={d.id}>
                        <TouchableOpacity 
                            onPress={d.text === 'Share Score' ? press : null} 
                            style={styles.icon_box}
                        >
                            {d.icon}
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={d.text === 'Share Score' ? press : null} 
                            style={styles.stack2}
                        >
                            <Text style={styles.text}>{d.text}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
            <Score_section4
                modalVisible={modalVisible2}
                setModalVisible={setModalVisible2}
            />
        </View>
    );
};

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
});
