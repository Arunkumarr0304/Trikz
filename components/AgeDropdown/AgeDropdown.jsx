import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import Drop from "../../assets/images/right_arrow.svg"; 
import ThemeContext from '../../theme/ThemeContext';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const countries = [
    { label: '10', value: '1' },
    { label: '11', value: '2' },
    { label: '12', value: '3' },
    { label: '13', value: '4' },
    { label: '14', value: '5' },
    { label: '15', value: '6' },
    { label: '16', value: '7' },
    { label: '17', value: '8' },
    { label: '18', value: '9' },
    { label: '19', value: '10' },
    { label: '20', value: '11' },
    { label: '21', value: '12' },
    { label: '22', value: '13' },
    { label: '23', value: '14' },
    { label: '24', value: '15' },
    { label: '25', value: '16' },
    { label: '26', value: '17' },
    { label: '27', value: '18' },
    { label: '28', value: '19' },
    { label: '29', value: '20' },
    { label: '30', value: '21' },
    { label: '31', value: '22' },
    { label: '32', value: '23' },
    { label: '33', value: '24' },
    { label: '34', value: '25' },
    { label: '35', value: '26' },
    { label: '36', value: '27' },
    { label: '37', value: '28' },
    { label: '38', value: '29' },
    { label: '39', value: '30' },
    { label: '40', value: '31' },
    { label: '41', value: '32' },
    { label: '42', value: '33' },
    { label: '43', value: '34' },
    { label: '44', value: '35' },
    { label: '45', value: '36' },
    { label: '46', value: '37' },
];

const AgeDropdown = ({label}) => {
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
      <TouchableOpacity style={[styles.inputContainer]} onPress={() => setModalVisible(true)}>
        <Text style={[styles.dropdownText]}>{selectedLanguage ? selectedLanguage.label : 'Select your age'}</Text>
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
          <View style={styles.modalContent}>
            <FlatList
              data={countries}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => selectLanguage(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
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
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 15,
    marginBottom: 25,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#ffffff',
  },
});

export default AgeDropdown;
