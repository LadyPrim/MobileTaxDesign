import React, {Component} from 'react';
import allReducers from './reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AddressForm from './components/AddressForm.js';
import { Field, reduxForm } from 'redux-form';
const store = createStore(allReducers);
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

export default class Application extends Component {
    render() {
        return (
            <Provider store={store}>
                <AddressForm/>
            </Provider>
        )
    }
}
