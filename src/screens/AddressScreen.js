import React, {Component} from "react";
import {View, StyleSheet} from 'react-native';

import AddressForm from '../components/AddressForm/AddressForm'
import SearchBar from "../components/SearchBar/SearchBar";


class AddressScreen extends React.Component{
    static navigationOptions = {
        headerTitle: 'Deine Adresse',
    };
    render(){
        const {navigate} = this.props.navigation
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

export default AddressScreen;