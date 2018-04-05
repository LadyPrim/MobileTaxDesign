import React, {Component} from 'react'
import {Entypo} from '@expo/vector-icons/Entypo';
import {StackNavigator, } from 'react-navigation';

import HomeScreen from './HomeScreen';
import AddressScreen from './AddressScreen';
import SearchScreen from './SearchScreen';

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Address: {
            screen: AddressScreen,
        },
        Adresssuche:{
            screen: SearchScreen,
        }
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