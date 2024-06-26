import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from './themeContext';

export default function Homepage() {
    const { isDarkMode } = useContext(ThemeContext);
    const navigation = useNavigation();

    return (
      <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#161622' : '#fff' }]}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView contentContainerStyle={styles.scrollView}>

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../assets/profile.png')} style={styles.profilePic} />
                    <View style={styles.welcomeMessage}>
                        <Text style={styles.welcome}>Welcome back,</Text>
                        <Text style={[styles.user, { color: isDarkMode ? '#fff' : '#000' }]}>Eric Atsu</Text>
                    </View>   
                </View>
                <View style={styles.imageWrapper}>
                  <Image source={require('../assets/search.png')} style={styles.search} />  
                </View>
            </View>

            <Image source={require('../assets/Card.png')} style={styles.card} />

            <View style = {styles.options}>
                <View style={styles.optionButton}>
                    <View style = {styles.imageWrapper}>
                        <Image source={require('../assets/send.png')} style={styles.icon} />
                    </View>
                    <Text style = {[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Sent</Text>
                </View>
                <View style={styles.optionButton}>
                    <View style = {styles.imageWrappers}>
                        <Image source={require('../assets/recieve.png')} style={styles.icon} />
                    </View>
                    <Text style = {[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Receive</Text>
                </View>
                <View style={styles.optionButton}>
                    <View style = {styles.imageWrapper}>
                        <Image source={require('../assets/loan.png')} style={styles.icon} />
                    </View>
                    <Text style = {[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Loan</Text>
                </View>
                <View style={styles.optionButton}>
                <View style = {styles.imageWrapper}>
                    <Image source={require('../assets/topUp.png')} style={styles.icon} />
                </View>
                    <Text style = {[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Topup</Text>
                </View>
            </View>

            <View style={styles.sectionHeader}>
              <Text style = {[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
            </View>

              <View style={styles.transactions}>

                <View style={styles.transactionMade}>
                    <View style = {styles.transaction}>
                        <View style = {styles.imageWrapper}>
                            <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.transactionInfo}>
                            <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Apple Store</Text>
                            <Text style={styles.category}>Entertainment</Text>
                        </View>
                    </View>
                    <Text style={[styles.debit, { color: isDarkMode ? '#fff' : '#000' }]}>-$5,99</Text>
                </View>

                <View style={styles.transactionMade}>
                    <View style = {styles.transaction}>
                        <View style = {styles.imageWrapper}>
                            <Image source = {require('../assets/spotify.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.transactionInfo}>
                            <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Spotify</Text>
                            <Text style={styles.category}>Music</Text>
                        </View>
                    </View>
                    <Text style={[styles.debit, { color: isDarkMode ? '#fff' : '#000' }]}>-$12,99</Text>
                </View>

                <View style={styles.transactionMade}>
                    <View style = {styles.transaction}> 
                        <View style = {styles.imageWrapper}>
                            <Image source = {require('../assets/moneyTransfer.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.transactionInfo}>
                            <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Money Transfer</Text>
                            <Text style={styles.category}>Transaction</Text>
                        </View>
                    </View>
                    <Text style={styles.credit}>$300</Text>
                </View>

                <View style={styles.transactionMade}>
                    <View style = {styles.transaction}>
                        <View style = {styles.imageWrapper}>
                            <Image source = {require('../assets/grocery.png')} style={styles.logo}/>
                        </View>
                        <View style={styles.transactionInfo}>
                            <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#000' }]}>Grocery</Text>
                            <Text style={styles.category}>Necessity</Text>
                        </View> 
                    </View>
                    <Text style={[styles.debit, { color: isDarkMode ? '#fff' : '#000' }]}>-$88</Text>
                </View>
              </View>
        </ScrollView>
        
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 35,
        alignItems: 'center',
    },
    headerLeft:{
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center',
    },
    profilePic:{
        width: 60,
        height: 60,
    },
    welcomeMessage:{
        gap: 5,
    },
    welcome:{
        color:'#7E848D',
        fontSize: 14,
    },
    user:{
        fontSize: 17,
        fontWeight: '600',
    },
    imageWrapper:{
        backgroundColor:'#E8E8E8',
        padding: 15,
        borderRadius: 40,
    },
    search:{
        width: 20 ,
        height: 20,
    },
    card:{
        marginBottom: 30,
        width: '100%',
    },
    options:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionButton:{
        gap: 5,
    },
    imageWrappers:{
        backgroundColor:'#E8E8E8',
        paddingHorizontal: 5,
        paddingVertical: 17,
        borderRadius: 40,
        alignItems: 'center',
    },
    name:{
        textAlign: 'center',
    },
    sectionHeader: {
        marginTop: 30,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTitle:{
        fontSize: 18,
        fontWeight: '500',
    },
    sellAll:{
        fontSize: 16,
        color: '#0066FF',
        fontWeight: '500',
    },
    transaction:{
        display: 'flex',
        flexDirection: 'row',
    },
    transactions:{
        marginTop: 20,
    },
    transactionMade:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    transaction:{
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    heading:{
        fontWeight: '600',
        fontSize: 18,
    },
    category:{
        fontSize: 14,
        color:'#7E848D',
    },
    debit:{
        fontWeight: '500',
        fontSize: 16,
    },
    credit:{
        fontWeight: '500',
        color: '#0066FF',
        fontSize: 16,
    },
    });