import React from 'react';
import {Component} from 'react';
import {StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddressForm from './src/components/AddressForm/AddressForm'
import Header from './src/components/Header/Header';
import {Font} from 'expo';
import SearchBar from "./src/components/SearchBar/SearchBar";

// HomeScreen

class HomeScreen extends Component {
    static navigationsOptions = {
        title: 'Home',
    };

    render(){
        return(
            <View>

            </View>
        )
    }

}

class AddressScreen extends Component{
    render(){
        return(
            <View>
                <View>
                    <SearchBar/>
                    <AddressForm/>
                </View>
            </View>
        );
    }
}

//Navigation
const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Address: {
            screen: AddressScreen},
    },
    {
        initialRouteName: 'Address',
    }
);



// AddressScreen
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


