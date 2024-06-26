import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar, Switch } from 'react-native';
import { ThemeContext } from './themeContext';


export default function Settings() {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
            <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#161622' : '#fff' }]}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView contentContainerStyle={styles.scrollView}>

                <View style={styles.header}>
                    <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>
                </View>

                <View style={styles.menu}>
                    <View style={[styles.options, { borderBottomColor: isDarkMode ? '#232533' : '#E8E8E8' }]}>
                        <Text style={[styles.optionName, { color: isDarkMode ? '#fff' : '#000' }]}>Language</Text>
                        <Image source={require('../assets/next.png')} style={styles.next} />
                    </View>

                    <View style={[styles.options, { borderBottomColor: isDarkMode ? '#232533' : '#E8E8E8' }]}>
                        <Text style={[styles.optionName, { color: isDarkMode ? '#fff' : '#000' }]}>My Profile</Text>
                        <Image source={require('../assets/next.png')} style={styles.next} />
                    </View>

                    <View style={[styles.options, { borderBottomColor: isDarkMode ? '#232533' : '#E8E8E8' }]}>
                        <Text style={[styles.optionName, { color: isDarkMode ? '#fff' : '#000' }]}>Contact Us</Text>
                        <Image source={require('../assets/next.png')} style={styles.next} />
                    </View>

                    <View style={[styles.options, { borderBottomColor: isDarkMode ? '#232533' : '#E8E8E8' }]}>
                        <Text style={[styles.optionName, { color: isDarkMode ? '#fff' : '#000' }]}>Change Password</Text>
                        <Image source={require('../assets/next.png')} style={styles.next} />
                    </View>

                    <View style={[styles.options, { borderBottomColor: isDarkMode ? '#232533' : '#E8E8E8' }]}>
                        <Text style={[styles.optionName, { color: isDarkMode ? '#fff' : '#000' }]}>Privacy Policy</Text>
                        <Image source={require('../assets/next.png')} style={styles.next} />
                    </View>
                </View>

                <View style={styles.theme}>
                    <Text style={[styles.themeName, { color: isDarkMode ? '#fff' : '#000' }]}>Theme</Text>
                    <Switch
                        trackColor={{ false: "#767574", true: "#1CE830" }}
                        thumbColor={isDarkMode ? "#FFF" : "#FFF"}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],marginRight:10 }}
                        onValueChange={toggleTheme}
                        value={isDarkMode}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 45,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 70,
        fontFamily:'PoppinsMedium'
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        marginBottom: 25,
        paddingBottom: 15,
    },
    optionName: {
        fontSize: 16,
        fontFamily:'PoppinsRegular'
    },
    next: {
        width: 24,
        height: 24
    },
    theme: {
        marginTop: 50,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    themeName: {
        fontSize: 25,
        marginBottom: 10,
        fontFamily:'PoppinsMedium'
    },
});

