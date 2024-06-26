import React, { useContext } from 'react';
import { Image } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './homepage';
import Settings from './settings';
import Cards from './Cards';
import Statistics from './Statistics';
import { ThemeContext } from './themeContext';
import { CustomDarkTheme } from './customTheme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeIcon = () => (<Image source={require('../assets/home.png')} style={{ width: 24, height: 24 }} />);
const CardsIcon = () => (<Image source={require('../assets/myCards.png')} style={{ width: 24, height: 24 }} />);
const StatisticsIcon = () => (<Image source={require('../assets/statictics.png')} style={{ width: 24, height: 24 }} />);
const SettingsIcon = () => (<Image source={require('../assets/settings.png')} style={{ width: 24, height: 24 }} />);

function AppNavigator() {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => (<HomeIcon />), }} name="Home" component={Homepage} />
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => (<CardsIcon />), }} name="My Cards" component={Cards} />
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => (<StatisticsIcon />), }} name="Statistics" component={Statistics} />
                <Tab.Screen options={{ tabBarIcon: ({ focused }) => (<SettingsIcon />), }} name="Settings" component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
