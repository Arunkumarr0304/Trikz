import { StyleSheet, Text, View, TouchableOpacity, Modal, StatusBar } from 'react-native';
import React, { useContext } from 'react';
import ThemeContext from '../../theme/ThemeContext';
import Lock from "../../assets/images/lock2.svg";
import { Poppins_400Regular } from '@expo-google-fonts/poppins';
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';
import { Modal_data } from '../Data/Data';

const Score_section4 = ({ modalVisible, setModalVisible }) => {
  const { theme, darkMode } = useContext(ThemeContext);
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
          <View style={[styles.modalView, {backgroundColor:theme.background}]}>
            <View style={styles.tab_container}>
                {
                    Modal_data.map((d) => (
                        <TouchableOpacity style={styles.tab} key={d.id}>
                            {darkMode? d.Dark_icon : d.icon}
                            <Text style={[styles.tab_text, {color:theme.color}]}>{d.text}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default Score_section4;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: '#ffffff',
    paddingTop: '10%',
    paddingBottom: '20%',
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
    width: '100%',
  },
  tab_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  tab: {
    alignItems: 'center',
    gap: 15,
  },
  tab_text: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: 'Poppins_400Regular',
  }
});
