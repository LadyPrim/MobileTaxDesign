import React, {Component} from "react";
import {View, Button, StyleSheet} from 'react-native';

import AddressForm from '../components/AddressForm/AddressForm';
//import BackButtonHeader from "../components/BackButtonHeader";

class AddressScreen extends React.Component{
    static navigationOptions = {
        headerTitle: 'Deine Adresse',
    };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={{backgroundColor: '#ffffff'}}>
                <View>
                    <Button
                        title="Adresse suchen"
                        onPress={() => this.props.navigation.navigate('Adresssuche')}
                    />
                    <AddressForm/>
                </View>
            </View>
        );
    }
}

export default AddressScreen;