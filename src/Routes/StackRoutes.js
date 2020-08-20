import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from '../Screens/Initial';
import FormScreen from '../Screens/Form';
import OthersScreens from './TabRoutes';

const { Navigator, Screen } = createStackNavigator();

export default function StackRoutes(){
    return(
        <NavigationContainer>

            <Navigator headerMode="none" initialRouteName="Initial">

                <Screen name="Initial" component={ InitialScreen } />
                <Screen name="Form" component={ FormScreen } />
                <Screen name="Others" component={ OthersScreens } />

            </Navigator>

        </NavigationContainer>
    )
}