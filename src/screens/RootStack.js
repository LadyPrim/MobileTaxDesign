import React, {Component} from 'react'

import {StackNavigator, } from 'react-navigation';

import HomeScreen from './HomeScreen';
import AddressScreen from './AddressScreen';

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Address: {
            screen: AddressScreen,
        },
    },
    {
        initialRouteName: 'Home',

        navigationOptions:{
            headerStyle:{
                backgroundColor: '#D3E7F5'
            },
            headerTitleStyle:{
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 28,
            },
        }
    }
);

export default RootStack;