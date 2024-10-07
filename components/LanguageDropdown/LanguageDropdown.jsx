import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import Drop from "../../assets/images/right_arrow.svg"; 
import ThemeContext from '../../theme/ThemeContext';

const languages = [
    { label: 'English', value: 'EN' },
    { label: 'Spanish', value: 'ES' },
    { label: 'French', value: 'FR' },
    { label: 'Chinese', value: 'ZH' },
    { label: 'German', value: 'DE' },
    { label: 'Italian', value: 'IT' },
    { label: 'Portuguese', value: 'PT' },
    { label: 'Russian', value: 'RU' },
    { label: 'Japanese', value: 'JA' },
    { label: 'Korean', value: 'KO' },
    { label: 'Arabic', value: 'AR' },
    { label: 'Hindi', value: 'HI' },
    { label: 'Bengali', value: 'BN' },
    { label: 'Punjabi', value: 'PA' },
    { label: 'Urdu', value: 'UR' },
    { label: 'Indonesian', value: 'ID' },
    { label: 'Vietnamese', value: 'VI' },
    { label: 'Turkish', value: 'TR' },
    { label: 'Persian', value: 'FA' },
    { label: 'Swahili', value: 'SW' },
    { label: 'Tamil', value: 'TA' },
    { label: 'Telugu', value: 'TE' },
    { label: 'Marathi', value: 'MR' },
    { label: 'Malayalam', value: 'ML' },
];

const LanguageDropdown = ({label}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useContext(ThemeContext);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input_box}>
        <Text style={[styles.label, {color:theme.color}]}>{label}</Text>
      <TouchableOpacity style={styles.inputContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.dropdownText}>{selectedLanguage ? selectedLanguage.label : 'Select a language'}</Text>
        <Drop style={styles.drop} />
      </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, {backgroundColor:theme.background, borderColor:theme.color}]}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => selectLanguage(item)}>
                  <Text style={[styles.optionText, {color:theme.color}]}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'rgba(92, 38, 186, 1)',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 40,
    paddingVertical: 18,
    position: 'relative',
  },
  input_box: {
    gap: 15,
  },
  label: {
    fontSize: 18,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
  },
  dropdownText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'BerkshireSwash_400Regular',
    color: '#808080',
    textAlign: 'center',
  },
  drop: {
    position: 'absolute',
    right: 20,
    transform: [{rotate: '90deg'}],
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    height: '50%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(92, 38, 186, 1)',
    padding: 10,
    borderRadius: 15,
    marginBottom: 25,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default LanguageDropdown;
