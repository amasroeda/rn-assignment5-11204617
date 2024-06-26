import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.header}>
            <Text style={styles.heading}>Settings</Text>     
        </View>

        <View style={styles.menu}>
            <View style={styles.options}>
                <Text style={styles.optionName}>Language</Text>
                <Image source={require('../assets/next.png')} style={styles.next}/>
            </View>

            <View style={styles.options}>
                <Text style={styles.optionName}>My Profile</Text>
                <Image source={require('../assets/next.png')} style={styles.next}/>
            </View>

            <View style={styles.options}>
                <Text style={styles.optionName}>Contact Us</Text>
                <Image source={require('../assets/next.png')} style={styles.next}/>
            </View>

            <View style={styles.options}>
                <Text style={styles.optionName}>Change Password</Text>
                <Image source={require('../assets/next.png')} style={styles.next}/>
            </View>

            <View style={styles.options}>
                <Text style={styles.optionName}>Privacy Policy</Text>
                <Image source={require('../assets/next.png')} style={styles.next}/>
            </View>
        </View>

        <View style={styles.theme}>
            <Text style={styles.themeName}>Theme</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  });