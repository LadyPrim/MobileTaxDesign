import React from 'react';
import {Component} from 'react';
import {StackNavigator, } from 'react-navigation';
import { StyleSheet, Text, View, Button } from 'react-native';
import t from 'tcomb-form-native';
import {Font} from 'expo';

// HomeScreen

class HomeScreen extends Component {
    static navigationsOptions = {
        title: 'Home',
    };

    render(){
        return(
            <View>
                <Text>Home Screen!</Text>
                <Button
                    title="Addresse hinzufügen"
                    onPress={() => this.props.navigation.navigate('Address')}
                />
            </View>
        );
    }
}

// Adressformular mit Gebrauch von tcomb-form-native
const Form = t.form.Form;

const User = t.struct({
    address1: t.String,
    address2: t.maybe(t.String),
    plz: t.Number,
    ort: t.String
});

t.form.Form.il8n = {
    optional: '',
    required: '*',
};

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
            fontFamily: 'Roboto',
            color: '#828282',
            fontSize: 14,
            marginBottom: 7,
            fontWeight: '600'
        },
        // the style applied when a validation error occours
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
    },
    textbox: {
        normal: {
            borderWidth: 0,
            marginBottom: 0,
        },
    },
    textboxView: {
        normal: {
            borderWidth: 0,
            borderRadius: 0,
            borderBottomWidth: 1,
            marginBottom: 5,
        },
    },

};

const options = {
    fields: {
        address1: {
            label: 'Adresse 1',
            error: 'Bitte eine gültige Strasse und Hausnummer angeben'
        },
        address2: {
            label: 'Adresse 2',
        },
        plz: {
            label: 'PLZ',
            error: '',
        },
        ort: {
            label: 'Ort',
            error: '',
        },
    },
    stylesheet: formStyles,
};



class AddressScreen extends Component{
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;

        return{
            title: params ? params.otherParam: ' Adresse ',
        }
    };

    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
    };
    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.container}>
                    <Form
                        ref={c => this._form = c}
                        type={User}
                        options={options}
                    />

                </View>
                <View style={{backgroundColor: 'white'}}>
                    <Button
                        title="Sign Up!"
                        onPress={this.handleSubmit}
                    />
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
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
        initialRouteName: 'Address'/*'Home'*/,
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

// Style
const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});
