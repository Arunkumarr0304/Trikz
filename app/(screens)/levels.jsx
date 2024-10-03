import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import ThemeContext from '../../theme/ThemeContext';
import Back from '../../assets/images/back.svg';
import Dark_back from '../../assets/images/dark_back.svg';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import QuizContext from '../../Quiz_context/Quiz_context';
import Lock from "../../assets/images/lock.svg";
import Star from "../../assets/images/star2.svg";
import Arrow from "../../assets/images/right_arrow.svg";
import { level_data } from '../../components/Data/Data';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Level_section2 from '../../components/Level/level_section2';
import Category from '../(tabs)/category';
import { router } from 'expo-router';

const Levels = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const { selectedHeading } = useContext(QuizContext);
    const [modalVisible, setModalVisible] = useState(null);
    const press = () => {
        setModalVisible(true);
    };
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                {darkMode ? <Dark_back onPress={() => {router.push('category')}} /> : <Back onPress={() => {router.push('category')}} />}
                <Text style={[styles.heading, { color: theme.color }]}>{selectedHeading}</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.stack_container}>
                {
                    level_data.map((d) => (
                        <TouchableOpacity style={styles.stack} key={d.id} onPress={() => {press()}}>
                            <View style={styles.left}>
                                <Text style={[styles.level, {color:theme.color}]}>{d.level}</Text>
                                <Text style={styles.status}>{d.status}</Text>
                            </View>
                            <View style={styles.right}>
                                <View style={styles.top}>
                                    <Lock />
                                    <Text style={[styles.total, {color:theme.color}]}>Total:<Text style={styles.value}>{d.value}</Text></Text>
                                    <Star />
                                </View>
                                <View style={styles.bottom}>
                                    <Text style={styles.status}>{d.question}</Text>
                                    <Arrow />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
            <Level_section2
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            />
        </View>
    );
};

export default Levels;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        marginTop: '15%',
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'BerkshireSwash_400Regular',
        position: 'absolute',
        left: '25%',
    },
    stack_container: {
        marginVertical: 30,
    },
    stack: {
        marginVertical: 9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#EFEEFC',
        paddingVertical: 14,
        paddingHorizontal: 20,
    },
    left: {
        gap: 5,
    },
    level: {
        fontSize: 20,
        lineHeight: 26,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    status: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        color: '#808080',
    },
    right: {
        gap: 5,
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    total: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins_700Bold',
    },
    value: {
        fontFamily: 'Poppins_400Regular',
        
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,

    }
});
