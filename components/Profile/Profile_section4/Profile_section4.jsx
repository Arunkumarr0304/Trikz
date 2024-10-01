import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import Down from "../../../assets/images/down_arrow.svg";
import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import Profile_section5 from '../Profile_section5/Profile_section5';
import Profile_section6 from '../Profile_section6/Profile_section6';
import ThemeContext from '../../../theme/ThemeContext';

const Profile_section4 = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stack}>
        <View style={styles.top}>
          <TouchableOpacity style={[styles.dropdown, {backgroundColor:theme.color1}]} onPress={toggleDropdown}>
            <Text style={[styles.text, {color:theme.color}]}>{selectedOption}</Text>
            <Down style={styles.down} />
          </TouchableOpacity>
          {isOpen && (
            <View style={[styles.optionsContainer, {backgroundColor:theme.color1}]}>
                    <TouchableOpacity style={styles.option} onPress={() => selectOption("Monthly")}>
                <Text style={[styles.text, {color:theme.color}]}>Monthly</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => selectOption("Daily")}>
                <Text style={[styles.text, {color:theme.color}]}>Daily</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.option} onPress={() => selectOption("Weekly")}>
                <Text style={[styles.text, {color:theme.color}]}>Weekly</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <Profile_section5 />
        <Profile_section6 />
      </View>
    </View>
  )
}

export default Profile_section4;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
    },
    stack: {
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#D9D4F7',
        backgroundColor: '#E8E5FA',
        paddingVertical: 16,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
    },
    dropdown: {
        borderWidth: 1.5,
        borderColor: '#EFEEFC',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
        maxWidth: 92,
    },
    down: {
        marginBottom: -2,
    },
    optionsContainer: {
        marginTop: 8,
        borderWidth: 1.5,
        borderColor: '#EFEEFC',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        width: '100%',
    },
    option: {
        paddingVertical: 8,
    },
    text: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Poppins_500Medium',
        color: '#0C092A',
        textTransform: 'capitalize',
    }
})
