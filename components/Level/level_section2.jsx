import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Lock from "../../assets/images/lock2.svg";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const Level_section2 = ({ modalVisible, setModalVisible }) => {
  const { theme } = useContext(ThemeContext);
  const cancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelLogout}
      >
        <TouchableOpacity onPress={cancelLogout} style={styles.modalContainer}>
          <View style={[styles.modalView]}>
            <View style={styles.header}>
                <Lock />
            <Text style={styles.heading}>Remember </Text>
            </View>
            <Text style={styles.text}>Complete the above level to continue Next Level</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default Level_section2;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 21,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#474747',
    textAlign: 'center',
    maxWidth: '75%',
  }
});
