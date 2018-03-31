import React, {PropTypes} from 'react';
import {Ionicons} from '@expo/vector-icons';
import Expo from 'expo';
import {View} from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const error = {};
    error.address = '';
    error.plz = '';
    error.kanton = '';

    var add = values.address;
    var plz = values.plz;
    var ktn = values.kanton;

    //Error Handling
    if(values.address === undefined){
        ema = '';
    }
    if(values.plz === undefined){
        plz = '';
    }
    if(values.kanton === undefined){
        ktn = '';
    }
};

class AddressForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isReady: false
        };
        this.renderInput = this.renderInput.bind(this);
    }
    async componentWillMount(){
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({isReady: true});
    }

    renderInput({input, label, type, meta: {touched, error, warning}}){
        var hasError = false;
        if(error !== undefined){
            hasError = true;
        }
        return(
            <Item error= {hasError}>
                <Input {...input}/>
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    render(){
        const {handleSubmit, reset} = this.props;
        if(!this.state.isReady){
            return <Expo.AppLoading />;
        }
        return(
            <Container>
                <Content padder>
                        <Field name="address" component={this.renderInput} />
                        <Field name="plz" component={this.renderInput} />
                        <Field name="kanton" component={this.renderInput} />
                        <Item>
                        </Item>
                        <Button block primary onPress= {reset}>
                            <Text>Submit</Text>
                        </Button>
                </Content>
            </Container>
        )
    }
}

export default reduxForm({
    form: 'test',
    validate
})(AddressForm)
