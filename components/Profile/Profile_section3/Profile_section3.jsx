import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../../theme/ThemeContext';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const Profile_section3 = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <View style={[styles.container]}>
            <View style={styles.row}>
                <Text style={[styles.text, { color: theme.text }]}>dark mode</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#4F22AE" }}
                    thumbColor={darkMode ? "#f4f3f4" : "#f4f3f4"}
                    onValueChange={toggleTheme}
                    value={darkMode}
                    style={styles.switch}
                />
            </View>
        </View>
    )
}

export default Profile_section3;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
    },
    text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'BerkshireSwash_400Regular',
        textTransform: 'capitalize',
    }
});
