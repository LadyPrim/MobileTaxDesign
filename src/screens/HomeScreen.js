// HomeScreen
import React, {Component} from "react";
import {View, Button} from 'react-native';


class HomeScreen extends React.Component {
    static navigationsOptions = {
        title: 'Home',
    };

    render(){
        const { navigate } = this.props.navigation
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

export default HomeScreen;