import React from 'react';
import GoogleSearchBar from '../components/SearchBar/GoogleSearchBar';
import {View} from 'react-native';

class SearchScreen extends React.Component{
    static navigationOptions ={
        title: 'Adresssuche',
    };

    render(){
        return(
            <View>
                <GoogleSearchBar/>
            </View>
        )
    }
}

export default SearchScreen;