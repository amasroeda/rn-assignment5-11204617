import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function Homepage() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={styles.header}>
            <Image source={require('../assets/profile.png')} style={styles.profilePic} />
              <View style={styles.welcomeMessage}>
                <Text style={styles.Welcome}>Welcome Back</Text>
                <Text style={styles.user}>Eric Atsu</Text>
              </View>
              <Image source={require('../assets/search.png')} style={styles.search} />
            </View>

            <Image source={require('../assets/Card.png')} style={styles.card} />

            <View style = {styles.options}>
                <View>
                    <Image source={require('../assets/send.png')} style={styles.icon} />
                    <Text style = {styles.name}>Sent</Text>
                </View>
                <View>
                    <Image source={require('../assets/recieve.png')} style={styles.icon} />
                    <Text style = {styles.name}>Receive</Text>
                </View>
                <View>
                    <Image source={require('../assets/loan.png')} style={styles.icon} />
                    <Text style = {styles.name}>Loan</Text>
                </View>
                <View>
                    <Image source={require('../assets/topUp.png')} style={styles.icon} />
                    <Text style = {styles.name}>Topup</Text>
                </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
            </View>
  
    
              <View style={styles.transactions}>
                <View>
                    <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                    <View style={styles.transactionMade}>
                        <Text style={styles.heading}>Apple Store</Text>
                        <Text style={styles.category}>Entertainment</Text>
                    </View>
                    <Text style={styles.debit}>-$5,99</Text>
                </View>

                <View>
                    <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                    <View style={styles.transactionMade}>
                        <Text style={styles.heading}>Spotify</Text>
                        <Text style={styles.category}>Music</Text>
                    </View>
                    <Text style={styles.debit}>-$12,99</Text>
                </View>

                <View>
                    <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                    <View style={styles.transactionMade}>
                        <Text style={styles.heading}>Money Transfer</Text>
                        <Text style={styles.category}>Transaction</Text>
                    </View>
                    <Text style={styles.credit}>$300</Text>
                </View>


                <View>
                    <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                    <View style={styles.transactionMade}>
                        <Text style={styles.heading}>Apple Store</Text>
                        <Text style={styles.category}>Necessity</Text>
                    </View>
                    <Text style={styles.debit}>-$88</Text>
                </View>
              </View>   
        </ScrollView>

        <View style = {styles.navigationBar}>      
            <TouchableOpacity  style={styles.button}>
                <Image source={require('../assets/home.png')} style={styles.navIcon} />
                <Text style = {styles.names}>Home</Text>
            </TouchableOpacity>
                    
            <TouchableOpacity  style={styles.button}>
                <Image source={require('../assets/myCards.png')} style={styles.navIcon} />
                <Text style = {styles.names}>My Cards</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.button}>
                <Image source={require('../assets/statictics.png')} style={styles.navIcon} />
                <Text style = {styles.names}>Statistics</Text>
            </TouchableOpacity>
                    
            <TouchableOpacity  style={styles.button}>
                <Image source={require('../assets/settings.png')} style={styles.navIcon} />
                <Text style = {styles.names}>Settings</Text>
            </TouchableOpacity>
            </View>

      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    });