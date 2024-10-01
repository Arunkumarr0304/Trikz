import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Tabs } from 'expo-router';
import React, { useContext } from 'react';
import Home from "../../assets/images/home.svg";
import Category from "../../assets/images/category.svg";
import Table from "../../assets/images/table.svg";
import Profiles from "../../assets/images/profile.svg";
import Active_home from "../../assets/images/active_home.svg";
import Active_Category from "../../assets/images/active_cate.svg";
import Active_Table from "../../assets/images/active_table.svg";
import Active_profile from "../../assets/images/active_profile.svg";
import ThemeContext from '../../theme/ThemeContext';

const TabBarButton = ({ children, onPress, accessibilityState }) => {
  const { theme } = useContext(ThemeContext);
  const isSelected = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        isSelected ? styles.activeTabButton : null,
      ]}
    >
      <View style={[styles.iconContainer, isSelected ? styles.activeIconContainer : null]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  const { theme, darkMode } = useContext(ThemeContext);

  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabBarButton {...props} title={route.name} />
          ),
          tabBarStyle: [styles.tabBar, {backgroundColor:theme.background}],
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconComponent;

            switch (route.name) {
              case 'home':
                IconComponent = focused ? Active_home : Home;
                break;
              case 'category':
                IconComponent = focused ? Active_Category : Category;
                break;
              case 'table':
                IconComponent = focused ? Active_Table : Table;
                break;
              case 'profile':
                IconComponent = focused ? Active_profile : Profiles;
                break;
              default:
                IconComponent = null;
                break;
            }

            return IconComponent ? <IconComponent /> : null;
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            title: 'Category',
          }}
        />
        <Tabs.Screen
          name="table"
          options={{
            title: 'Table',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tabBar: {
    width: '100%',
    maxHeight: 85,
    height: '100%',
    borderTopWidth: 0,
    elevation: 0,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
  },
  iconContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 70,
    maxWidth: 86,
    minHeight: 60,
    maxHeight: 60,
  },
  activeIconContainer: {
    // You can style the active state here if needed
  },
  activeTabButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabsLayout;
