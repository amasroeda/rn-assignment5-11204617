import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './homepage';
import Settings from './settings';
import Cards from './Cards';
import Statistics from './Statistics';

// Create the stack navigator
//const Stack = createStackNavigator();

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Homepage} />
            <Tab.Screen name="My Cards" component={Cards} />
            <Tab.Screen name="Statistics" component={Statistics} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      );
}

export default AppNavigator;
