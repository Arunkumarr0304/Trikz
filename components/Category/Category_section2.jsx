import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { cate_data2 } from '../../Data/Data';
import Arrow from '../../assets/images/right_arrow.svg';
import ThemeContext from '../../theme/ThemeContext';
import QuizContext from '../../Quiz_context/Quiz_context';
import { useRouter } from 'expo-router';

const Category_section2 = ({ activeTab }) => {
    const { theme } = useContext(ThemeContext);
    const { setSelectedHeading } = useContext(QuizContext);
    const router = useRouter();

    const filteredData = cate_data2.filter((d) => {
        if (activeTab === 1) return true;
        if (activeTab === 2 && d.type.toLowerCase() === 'math') return true;
        if (activeTab === 3 && d.type.toLowerCase() === 'social') return true;
        if (activeTab === 4 && d.type.toLowerCase() === 'sport') return true;
        if (activeTab === 5 && d.type.toLowerCase() === 'science') return true;
        return false;
    });

    const press = (heading) => {
        setSelectedHeading(heading);
        router.push('(screens)/levels');
    };

    return (
        <View style={styles.container}>
            <View style={styles.stack_container}>
                {filteredData.map((d) => (
                    <TouchableOpacity style={styles.stack} key={d.id} onPress={() => press(d.heading)}>
                        <View style={styles.left}>
                            {d.image}
                            <View style={styles.left_content}>
                                <Text style={[styles.heading, { color: theme.color }]}>{d.heading}</Text>
                                <Text style={styles.text}>{d.type} <Text style={styles.value}>{d.text}</Text></Text>
                            </View>
                        </View>
                        <Arrow />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default Category_section2;

const styles = StyleSheet.create({
    stack_container: {
        marginVertical: 36,
        gap: 16,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#EFEEFC',
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    heading: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'BerkshireSwash_400Regular',
    },
    text: {
        fontSize: 12,
        lineHeight: 22,
        fontFamily: 'Poppins_400Regular',
        color: '#808080',
    }
});
