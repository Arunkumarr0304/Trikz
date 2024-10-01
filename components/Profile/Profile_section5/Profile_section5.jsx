import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Circle } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import ThemeContext from '../../../theme/ThemeContext';

const Profile_section5 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        You have played a total 
        <Text style={styles.link}> 24 quizzes </Text>
        this month!
      </Text>
      
      <AnimatedCircularProgress
        size={150}
        width={12} 
        fill={80} 
        tintColor="rgba(79, 34, 174, 0.8)" 
        backgroundColor="#ffffff" 
        rotation={0} 
        lineCap="round" 
      >
        {() => (
          <View style={styles.content}>
            <Text style={styles.score}>
              37<Text style={styles.orginal}>/50</Text>
            </Text>
            <Text style={styles.text}>quiz played</Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default Profile_section5;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 12,
        marginTop: 16,
    },
    heading: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'BerkshireSwash_400Regular',
        textAlign: 'center',
    },
    link: {
        color: '#4F22AE',
    },
    content: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    score: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Poppins_700Bold',
        color: '#000000',
        textAlign: 'center',
    },
    orginal: {
        color: 'rgba(24, 18, 84, 0.5)',
    },
    text: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
    }
});
