import React from 'react';
import {View, Text} from 'react-native';

const CityInfo = ({selectedCity, address, location}) =>{
    console.log('AAA', selectedCity, address, location);
    return (
        <View>
            <Text>{selectedCity}</Text>
            <Text>{address}</Text>
            <Text>{location.lat}</Text>
        </View>
    )
}

export default CityInfo
