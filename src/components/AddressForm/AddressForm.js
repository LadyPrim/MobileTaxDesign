import React, {Component} from 'react';
import t from 'tcomb-form-native';
import { View } from 'react-native';

const Form = t.form.Form;

const Kantons = t.enums({
    ag: 'AG',
    ai: 'AI',
    ar: 'AR',
    be: 'BE',
    bl: 'BL',
    bs: 'BS',
    fr: 'FR',
    ge: 'GE',
    gl: 'GL',
    gr: 'GR',
    ju: 'JU',
    lu: 'LU',
    ne: 'NE',
    nw: 'NW',
    ow: 'OW',
    sg: 'SG',
    sh: 'SH',
    so: 'SO',
    sz: 'SZ',
    tg: 'TG',
    ti: 'TI',
    ur: 'UR',
    vd: 'VD',
    vs: 'VS',
    zg: 'ZG',
    zh: 'ZH',
});

const User = t.struct({
    address: t.String,
    plz: t.Number,
    ort: t.String,
    kanton: Kantons,
});

Form.il8n = {
    optional: '',
    required: '*',
};

const formStyle = {
    ...Form.stylesheet,
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
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
            marginBottom: 40,
        },
    },
};

const options = {
    fields: {
        address: {
            label: 'Adresse',
            error: 'Bitte eine gültige Strasse und Hausnummer angeben'
        },
        plz: {
            label: 'Postleitzahl',
            error: '',
        },
        ort: {
            label: 'Ort',
            error: '',
        },
        kanton:{
            label: 'Kanton',
            error: '',
        },
    },
    stylesheet: formStyle,
};

class AddressForm extends Component{
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
                <View style={formStyle.container}>
                    <Form
                        ref={c => this._form = c}
                        type={User}
                        options={options}
                    />
                </View>
            </View>
        );
    }
}

export default AddressForm;