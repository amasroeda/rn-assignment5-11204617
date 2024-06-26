import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

export default function Homepage() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Image source={require('../assets/profile.png')} style={styles.profilePic} />
                    <View style={styles.welcomeMessage}>
                        <Text style={styles.welcome}>Welcome back,</Text>
                        <Text style={styles.user}>Eric Atsu</Text>
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
                    <Text style = {styles.name}>Sent</Text>
                </View>
                <View style={styles.optionButton}>
                    <View style = {styles.imageWrappers}>
                        <Image source={require('../assets/recieve.png')} style={styles.icon} />
                    </View>
                    <Text style = {styles.name}>Receive</Text>
                </View>
                <View style={styles.optionButton}>
                    <View style = {styles.imageWrapper}>
                        <Image source={require('../assets/loan.png')} style={styles.icon} />
                    </View>
                    <Text style = {styles.name}>Loan</Text>
                </View>
                <View style={styles.optionButton}>
                <View style = {styles.imageWrapper}>
                    <Image source={require('../assets/topUp.png')} style={styles.icon} />
                </View>
                    <Text style = {styles.name}>Topup</Text>
                </View>
            </View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Transaction</Text>
                <Text style={styles.sellAll}>Sell all</Text>
            </View>
              <View style={styles.transactions}>

                <View style={styles.transactionMade}>
                    <View style = {styles.transaction}>
                        <Image source = {require('../assets/apple.png')} style={styles.logo}/>
                        <View style={styles.transactionInfo}>
                            <Text style={styles.heading}>Apple Store</Text>
                            <Text style={styles.category}>Entertainment</Text>
                        </View>
                    </View>
                    <Text style={styles.debit}>-$5,99</Text>
                </View>

                <View style={styles.transactionsMade}>
                    <View style = {styles.transaction}>
                        <Image source = {require('../assets/spotify.png')} style={styles.logo}/>
                        <View style={styles.transactionInfo}>
                            <Text style={styles.heading}>Spotify</Text>
                            <Text style={styles.category}>Music</Text>
                        </View>
                    </View>
                    <Text style={styles.debit}>-$12,99</Text>
                </View>

                <View style={styles.transactionsMade}>
                    <View style = {styles.transaction}> 
                        <Image source = {require('../assets/moneyTransfer.png')} style={styles.logo}/>
                        <View style={styles.transactionInfo}>
                            <Text style={styles.heading}>Money Transfer</Text>
                            <Text style={styles.category}>Transaction</Text>
                        </View>
                    </View>
                    <Text style={styles.credit}>$300</Text>
                </View>

                <View style={styles.transactionsMade}>
                    <View style = {styles.transaction}>
                        <Image source = {require('../assets/grocery.png')} style={styles.logo}/>
                        <View style={styles.transactionInfo}>
                            <Text style={styles.heading}>Grocery</Text>
                            <Text style={styles.category}>Necessity</Text>
                        </View> 
                    </View>
                    <Text style={styles.debit}>-$88</Text>
                </View>
              </View>
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
        backgroundColor:'#F4F4F4',
        padding: 15,
        borderRadius: 40,
    },
    search:{
        width: 20 ,
        height: 20,
    },
    // card:{
    //     marginBottom: 30,
    //     width: '100%',
    //     height: '34%',
    // },
    // options:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    // optionButton:{
    //     gap: 5,
    // },
    // imageWrappers:{
    //     backgroundColor:'#F4F4F4',
    //     paddingHorizontal: 5,
    //     paddingVertical: 17,
    //     borderRadius: 40,
    //     alignItems: 'center',
    // },
    // name:{
    //     textAlign: 'center',
    // },
    // sectionHeader: {
    //     marginTop: 30,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    // sectionTitle:{
    //     fontSize: 18,
    //     fontWeight: '500',
    // },
    // sellAll:{
    //     fontSize: 16,
    //     color: '#0066FF',
    //     fontWeight: '500',
    // },
    // transaction:{
    //     display: 'flex',
    //     flexDirection: 'row',
    // },
    // navigationBar:{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // }
    // transactions:{
    //     marginTop: 20,
    // },
    // transactionMade:{
        
    // },
    // transaction:{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     // justifyContent: 'space-between',
    // },
    // logo:{},
    // transactionInfo:{},
    // heading:{
    //     fontWeight: '600',
    // },
    // category:{},
    // debit:{
    //     fontWeight: '600',
    // },
    // credit:{
    //     fontWeight: '600',
    //     color: '#0066FF',
    // },

    });