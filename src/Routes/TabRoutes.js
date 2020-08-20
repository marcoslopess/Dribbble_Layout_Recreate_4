import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/Home';
import LearnScreen from '../Screens/Learn';
import ProgressScreen from '../Screens/Progress';
import ProfileScreen from '../Screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <NavigationContainer independent={ true }>

            <Navigator>

                <Screen name="Home" component={ HomeScreen } />
                <Screen name="Learn" component={ LearnScreen } />
                <Screen name="Progress" component={ ProgressScreen } />
                <Screen name="Profile" component={ ProfileScreen } />

            </Navigator>

        </NavigationContainer>
    )
}