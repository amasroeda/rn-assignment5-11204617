import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

 export default function Statistics() {
    return (
      <View style={styles.container}>
        <Text>Statistics Screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      paddingHorizontal: 20,
    }
  })