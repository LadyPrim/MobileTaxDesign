import React, {Component} from 'react';
import {Ionicons} from '@expo/vector-icons';
import Expo from 'expo';
import {View} from 'react-native';
import { Container, Header, Content, Item, Input, Icon,Body, Content, Title, Button, Text, Form } from 'native-base';
import { Field, reduxForm } from 'redux-form';

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
                    <Form form={""} onSubmit={""}>
                        <Item stackedLabel>
                            <Label> Adresse *</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel>
                            <Label> Postleitzahl *</Label>
                        </Item>
                        <Item>
                            <Label> Kanton *</Label>
                        </Item>
                        <Button block primary onPress= {reset}>
                            <Text>Submit</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default AddressForm
