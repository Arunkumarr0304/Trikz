import { StyleSheet, Text, View, Image, TouchableOpacity, PanResponder } from 'react-native'; // Import PanResponder
import React, { useContext, useState, useRef } from 'react';
import Language_bg from "../../assets/images/language_page.png";
import Age from '../../components/Age/Age';
import Slider from '@react-native-community/slider';
import ThemeContext from '../../theme/ThemeContext';
import Drop from "../../assets/images/drop.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import Button from '../../components/Button/Button';
import {router, Link} from "expo-router";

const Age_screen = () => {
    const { theme, darkMode } = useContext(ThemeContext);
    const [distance, setDistance] = useState(10);
    const [boxPosition, setBoxPosition] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('I am a student');

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                let newBoxPosition = gestureState.dx + boxPosition;

                if (newBoxPosition < 0) newBoxPosition = 0;
                if (newBoxPosition > sliderWidth - 50) newBoxPosition = sliderWidth - 50;

                const newDistance = newBoxPosition / (sliderWidth - 50);
                setBoxPosition(newBoxPosition);
                setDistance(Math.floor(newDistance * 50));
            },
        })
    ).current;

    const handleDistanceChange = (newDistance) => {
        const sliderValue = Math.floor(newDistance * 50);
        setDistance(sliderValue);

        const thumbPosition = newDistance * (sliderWidth - 50);
        setBoxPosition(thumbPosition);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <Image source={Language_bg} style={styles.bg} />
            <View style={[styles.content, {backgroundColor:theme.background}]}>
                <Text style={[styles.heading, {color:theme.color}]}>Select Your Age & Profession</Text>
                <Text style={[styles.heading2, {color:theme.color}]}>Enter Age</Text>
                <Age />
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#4F22AE"
                    maximumTrackTintColor={darkMode ? '#ffffff' : '#000000'}
                    thumbTintColor="#4F22AE"
                    onValueChange={handleDistanceChange}
                    value={distance / 100}
                    onLayout={(event) => setSliderWidth(event.nativeEvent.layout.width)}
                />
                <View
                    style={[styles.box, { left: boxPosition }]}
                    {...panResponder.panHandlers}
                >
                    <Text style={styles.value}>{distance}</Text>
                </View>
                <Text style={[styles.heading2, {color:theme.color}]}>Choose Your Profession</Text>
                <TouchableOpacity style={[styles.dropdown]} onPress={toggleDropdown}>
                    <Text style={styles.dropdownText}>{selectedOption}</Text>
                    <Drop style={styles.drop} />
                </TouchableOpacity>
                {dropdownVisible && (
                    <View style={styles.dropdownOptions}>
                        <TouchableOpacity onPress={() => selectOption('I am a student')}>
                            <Text style={styles.optionText}>I am a student</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => selectOption('I am a employee')}>
                            <Text style={styles.optionText}>I am a employee</Text>
                        </TouchableOpacity>
                    </View>
                )}
                <View style={styles.button_box}>
                    <Button buttonText="submit" onPress={() => {router.push('gender')}} />
                </View>
            </View>
        </View>
    );
};

export default Age_screen;

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
    heading2: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'BerkshireSwash_400Regular',
        textAlign: 'center',
        textTransform: 'capitalize',
        marginTop: 30,
    },
    slider: {
        width: 300,
        marginTop: 20,
    },
    box: {
        position: 'absolute',
        top: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F22AE',
        width: 50,
        height: 40,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    value: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'BerkshireSwash_400Regular',
        color: '#ffffff',
    },
    dropdown: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    drop: {
        position: 'absolute',
        right: 25,
    },
    dropdownText: {
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    dropdownOptions: {
        marginTop: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 5,
    },
    button_box: {
        marginTop: 30,
    }
});
