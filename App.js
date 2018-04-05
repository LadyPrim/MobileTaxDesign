import React from 'react';
import {Component} from 'react';

import RootStack from './src/screens/RootStack';

import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';




//Navigation




export default class App extends Component {
    componentDidMount() {
        Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/Open_Sans/OpenSans-Bold.ttf'),
        });
    }

    render(){
        return <RootStack />;
    }

}



