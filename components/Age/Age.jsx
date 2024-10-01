import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const Age = () => {
    const { theme,  darkMode } = useContext(ThemeContext);
    const otpInputs = useRef([]);
    const [otp, setOtp] = useState(['', '']);
    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        } else if (index === otp.length - 1 && value !== '') {
            Keyboard.dismiss();
        }
    };
    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                otpInputs.current[index - 1].focus();
            }
        }
    };

  return (
    <View>
        <View style={styles.otp_block}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            style={[styles.input, {color: theme.color, borderColor:theme.bordercolor}]}
                            maxLength={1}
                            keyboardType="numeric"
                            onChangeText={(value) => handleOtpChange(index, value)}
                            onKeyPress={(event) => handleBackspace(index, event)}
                            value={digit}
                            ref={(ref) => otpInputs.current[index] = ref}
                            placeholder=''
                        />
                    ))}
                </View>
    </View>
  )
}

export default Age;

const styles = StyleSheet.create({
    otp_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 10,
        marginBottom: 30,
    },
    input: {
        borderBottomWidth: 2,
        width: 30,
        height: 30,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 30,
        color: '#000000',
        fontFamily: 'BerkshireSwash_400Regular',
    },
})