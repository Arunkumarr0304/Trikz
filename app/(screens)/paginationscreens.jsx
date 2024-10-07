import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Coin from "../../assets/images/coin.svg";
import Button from '../../components/Button/Button';
import { router } from 'expo-router';
import ThemeContext from '../../theme/ThemeContext';
import { pagination_data } from '../../Data/Data'; 
import Pagination_screens1 from '../../components/Pagination_screens/Pagination_screen1';
import Prev from "../../assets/images/prev.svg";
import Dark_prev from "../../assets/images/dark_prev.svg";
import Next from "../../assets/images/next.svg";
import Dark_next from "../../assets/images/dark_next.svg";
import { BerkshireSwash_400Regular } from '@expo-google-fonts/berkshire-swash';

const Paginationscreens = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [activePage, setActivePage] = useState(0);
  const totalPages = pagination_data.length;
  const go_back = () => {
    router.push('home');
  };
  const handleNext = () => {
    if (activePage < totalPages - 1) {
      setActivePage(activePage + 1);
    } else if (activePage === totalPages - 1) {
      router.push('(screens)/score');
    }
  };

  const handlePrevious = () => {
    if (activePage > 0) {
      setActivePage(activePage - 1);
    } 
  };

  const renderPageContent = () => {
    return <Pagination_screens1 data={pagination_data[activePage]} />;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View style={styles.header_left}>
          {darkMode ? (
            <Dark_back onPress={go_back} />
          ) : (
            <Back onPress={go_back} />
          )}
          <Text style={[styles.heading, {color:theme.color}]}>General Quiz</Text>
        </View>
        <TouchableOpacity style={styles.box}>
          <Coin />
          <Text style={styles.currency}>550</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        {renderPageContent()}
      </View>
      <View style={styles.buttonContainer}>
       {darkMode? <Dark_prev onPress={handlePrevious} /> : <Prev onPress={handlePrevious} />}
        <Text style={[styles.page_no, {color:theme.color}]}>{activePage+1}/{totalPages}</Text>
       {darkMode? <Dark_next  onPress={handleNext} /> : <Next  onPress={handleNext} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '65%',
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
  },
  contentContainer: {
    flex: 1,
    marginBottom: 50,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    left: 23,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
    backgroundColor: '#4F22AE',
    width: 100,
    height: 30,
  },
  currency: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    color: '#ffffff',
  },
  page_no: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'BerkshireSwash_400Regular',
  }
});

export default Paginationscreens;
