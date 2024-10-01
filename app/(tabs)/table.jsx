import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { tab_data } from '../../components/Data/Data';
import Weekly from '../../components/Weekly/Weekly';
import All_time from '../../components/All_time/All_time';
import ThemeContext from '../../theme/ThemeContext';
import {router, Link} from "expo-router";

const Table = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_tab, setActive_tab] = useState(tab_data[0].id);

    const press = (id) => {
        setActive_tab(id);
    };

    return (
        <View style={[styles.container, {backgroundColor:theme.background}]}>
            <StatusBar translucent barStyle={darkMode? 'light-content' : 'dark-content'} />
            <View style={styles.header}>
            <TouchableOpacity onPress={() => {router.push('home')}}>
         {darkMode? <Dark_back /> : <Back />}
          </TouchableOpacity>
                <Text style={[styles.heading, {color:theme.color}]}>Points Table</Text>
            </View>
            <View style={styles.tab_container}>
                {tab_data.map((d) => (
                    <TouchableOpacity
                        style={[styles.tab, active_tab === d.id && styles.active_tab]}
                        key={d.id}
                        onPress={() => press(d.id)}
                    >
                        <Text style={[styles.tab_text, active_tab === d.id && styles.active_text]}>{d.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {active_tab === 1 && <Weekly />}
            {active_tab === 2 && <All_time />}
            </ScrollView>
        </View>
    );
};

export default Table;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
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
        left: '30%',
    },
    tab_container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        marginVertical: 25,
    },
    tab: {
        padding: 8,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 130,
        height: 48,
    }, 
    active_tab: {
        backgroundColor: '#6829C6',
    },
    tab_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        color: '#6829C6',
        textTransform: 'capitalize',
    },
    active_text: {
        color: '#ffffff',
    }
});
