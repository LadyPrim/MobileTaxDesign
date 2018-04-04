import React from 'react';
import {Component} from 'react';
import {StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import AddressForm from './src/components/AddressForm/AddressForm'
import Header from './src/components/AppHeader/AppHeader';
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
                <Button
                    title="Go to Address form"
                    onPress={() => this.props.navigation.navigate('Address')}
                />
            </View>
        )
    }

}

class AddressScreen extends Component{
    static navigationOptions = {
        headerTitle: 'Deine Adresse',
    };
    render(){
        return(
            <View style={{backgroundColor: '#ffffff'}}>
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
            screen: AddressScreen
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



