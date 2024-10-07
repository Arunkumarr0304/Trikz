import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Language_bg from "../../assets/images/language_page.png";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { favourite_data } from '../../Data/Data';
import Button from "../../components/Button/Button";
import {router, Link} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Favourite = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_stack, setActive_stack] = useState(favourite_data[0].id);
    const press = (id) =>{
        setActive_stack(id);
    }
  return (
    <View style={styles.container}> 
    <Image source={Language_bg} style={styles.bg} />
    <View style={[styles.content, {backgroundColor:theme.background}]}>
        <Text style={[styles.heading, {color:theme.color}]}> Your Favourite Topic</Text>
        <View style={styles.stack_container}>
                    {
                        favourite_data.map((d) => (
                            <TouchableOpacity style={[styles.stack, active_stack === d.id && styles.active_stack]} key={d.id} onPress={() => {press(d.id)}}>
                                <Text style={[[styles.stack_text, {color:theme.color}], active_stack === d.id && styles.active_stack_text]}>{d.text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <View style={styles.button_box}>
                    <Button buttonText="submit" onPress={() => {router.push('nick_name')}} />
                </View>
    </View>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        width: '100%',
        height: '100%',
    },
    content: {
        position: 'absolute',
        zIndex: 100,
        backgroundColor: '#ffffff',
        width: '100%',
        bottom: 0,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#000000',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    stack_container: {
        marginVertical: 20,
        gap: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stack: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingVertical: 11,
        borderColor: 'rgba(92, 38, 186, 1)',
        width: 140,
        height: 50,
    },
    stack_text: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#000000',
        textTransform: 'capitalize',
    },
    active_stack: {
        borderWidth: 3,
    },
    active_stack_text: {
        color: 'rgba(92, 38, 186, 1)',
    },
    button_box: {
        marginVertical: 10,
    }
})