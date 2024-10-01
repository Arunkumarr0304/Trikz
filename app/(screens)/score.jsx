import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Score_section2 from '../../components/Score/Score_section2';
import Score_section3 from '../../components/Score/Score_section3';
import ThemeContext from '../../theme/ThemeContext';
import { router } from "expo-router";

const Score = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);

    const handleBackPress = () => {
        router.push('home');
    };

    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <View style={styles.column}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    {darkMode ? <Dark_back /> : <Back />}
                </TouchableOpacity>
                <Text style={[styles.heading, {color:theme.color}]}>Score</Text>
            </View>
            <View style={styles.score_container}>
                <View style={styles.border}>
                    <TouchableOpacity style={styles.circle}>
                        <Text style={styles.head}>Score</Text>
                        <Text style={styles.score}>16</Text>
                    </TouchableOpacity>
                </View>
            </View>
                <Score_section2 />
                </View>
                <Score_section3 />
        </View>
    );
};

export default Score;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        textTransform: 'capitalize',
        position: 'absolute',
        left: '40%',
    },
    score_container: {
        alignItems: 'center',
        marginTop: '20%',
    },
    border: {
        borderRadius: 85,
        borderColor: '#6829C6',
        borderWidth: 9,
        width: 117,
        height: 117,
        alignItems:'center',
        justifyContent: 'center',
    },
    circle: {
        borderWidth: 6,
        borderColor: '#6829C6',
        borderRadius: 50,
        backgroundColor: '#4F22AE',
        alignItems:'center',
        justifyContent: 'center',
        width: 98,
        height: 98,
    },
    head: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#FFFFFF',
        textTransform: 'capitalize',
    },
    score: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#FFFFFF',
    }
});
