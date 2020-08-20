import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, Octicons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../Screens/Home';
import LearnScreen from '../Screens/Learn';
import ProgressScreen from '../Screens/Progress';
import ProfileScreen from '../Screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <NavigationContainer independent={ true }>

            <Navigator tabBarOptions={{
                style:{
                    backgroundColor:'#17324f',
                    borderTopColor:'transparent'
                },
                activeTintColor:'#91c704',
                inactiveTintColor:'#fff',
            }}>

                <Screen 
                    name="Home" 
                    component={ HomeScreen }
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name="home" size={ 23 } color={ color } />
                        )
                    }} 
                />
                <Screen 
                    name="Learn" 
                    component={ LearnScreen }
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <FontAwesome name="book" size={ 23 } color={ color } />
                        )
                    }} 
                />
                <Screen 
                    name="Progress" 
                    component={ ProgressScreen }
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Octicons name="graph" size={ 23 } color={ color } />
                        )
                    }} 
                />
                <Screen 
                    name="Profile" 
                    component={ ProfileScreen }
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="person" size={ 23 } color={ color } />
                        )
                    }} 
                />

            </Navigator>

        </NavigationContainer>
    )
}