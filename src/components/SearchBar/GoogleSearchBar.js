import React, {Component} from 'react';
import {Constants} from 'expo';
import {View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const windowSize = require('Dimensions').get('window');
const deviceWidth = windowSize.width;
const deviceHeight = windowSize.height;

class SearchBar extends Component {
    render() {
        return (
            <View style={{ paddingTop: Constants.statusBarHeight, flex: 1 }}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    minLength={2}
                    autoFocus={false}
                    fetchDetails={true}
                    renderDescription={row => row.description}
                    onPress={(data, details = null) => {
                        console.log(data);
                        console.log(details);
                    }}
                    getDefaultValue={() => {
                        return '';
                    }}
                    query={{
                        key: 'AIzaSyCXrHDPB6rlSWwu8Sy7JLrUxTpG8XHDPig',
                        language: 'de',
                        components: 'country:ch',
                        types: 'address',
                    }}
                    styles={{
                        description: {
                            fontWeight: 'bold',
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb',
                        },
                        listView:{
                            position: 'absolute',
                            height: deviceHeight,
                            width: deviceWidth,
                        },
                    }}
                    currentLocation={false}
                    currentLocationLabel="Aktueller Standort"
                    nearbyPlacesAPI="GooglePlacesSearch"
                    GoogleReverseGeocodingQuery={{
                        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                    }}
                    GooglePlacesSearchQuery={{
                        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                        rankby: 'distance',
                        types: 'food',
                    }}
                />
            </View>
        );
    }
}

export default SearchBar;
