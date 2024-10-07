import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Language_bg from "../../assets/images/language_page.png";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { language_data } from '../../Data/Data';
import Tick from "../../assets/images/tick.svg";
import Button from '../../components/Button/Button';
import {router, Link} from "expo-router";
import ThemeContext from '../../theme/ThemeContext';
 
const Language = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_stack, setActive_stack] = useState(language_data[0].id);
    const press = (id) => {
        setActive_stack(id);
    };

    return (
        <View style={styles.container}> 
            <Image source={Language_bg} style={styles.bg} />
            <View style={[styles.content, {backgroundColor:theme.background}]}>
                <Text style={[styles.heading, {color:theme.color}]}>Select Your Language</Text>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.stack_container}>
                    {
                        language_data.map((d) => (
                            <TouchableOpacity 
                                style={[
                                    styles.stack, 
                                    active_stack === d.id && styles.active_stack
                                ]}
                                key={d.id}
                                onPress={() => press(d.id)}
                            >
                                {active_stack === d.id && <Tick style={styles.tick} />}
                                <Text style={[
                                    [styles.stack_text, {color:theme.color}], 
                                    active_stack === d.id && styles.active_text
                                ]}>
                                    {d.text}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
                <Button buttonText="Submit" onPress={() => {router.push('age_screen')}} />
            </View>
        </View>
    );
}

export default Language;

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
        gap: 20,
        marginVertical: 30,
        height: 350,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(92, 38, 186, 1)',
        paddingVertical: 11,
        paddingHorizontal: 30,
        marginTop: 20,
        justifyContent: 'center', 
    },
    stack_text: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#000000',
        textAlign: 'center',
        flex: 1, 
    },
    active_stack: {
        borderWidth: 2.5,
    },
    active_text: {
        color: '#4F22AE',
        marginLeft: -20,
    },
    tick: {
        
    }
});
