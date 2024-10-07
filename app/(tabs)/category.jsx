import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { router, Link } from "expo-router";
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { cate_data } from "../../Data/Data";
import ThemeContext from "../../theme/ThemeContext";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import Category_section2 from "../../components/Category/Category_section2";

const Category = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [active_tab, setActive_tab] = useState(cate_data[0].id);
    const press = (id) => {
        setActive_tab(id);
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                {darkMode ? <Dark_back onPress={() => {router.push('home')}} /> : <Back onPress={() => {router.push('home')}} />}
                <ScrollView style={styles.tab_container} horizontal={true}>
                    {
                        cate_data.map((d) => (
                            <TouchableOpacity style={[styles.tab, active_tab === d.id && styles.active_tab]} onPress={() => { press(d.id) }} key={d.id}>
                                <Text style={[styles.tab_text, active_tab === d.id && styles.active_tab_text]}>{d.text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Category_section2 activeTab={active_tab} />
            </ScrollView>
        </View>
    );
}

export default Category;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        marginTop: '18%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tab_container: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    tab: {
        borderRadius: 9,
        padding: 8,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        color: '#6829C6',
        textTransform: 'capitalize',
    },
    active_tab: {
        backgroundColor: '#6829C6',
    },
    active_tab_text: {
        color: '#ffffff',
    }
});
