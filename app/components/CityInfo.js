import React from 'react';
import {TouchableOpacity, Icon, Image, View, Text} from 'react-native';

import styles from '../styles';

const background = require('../assets/images/sky.jpg');
const back = require('../assets/images/back.png');

const CityInfo = ({selectedCity, address, location}) =>{
    return (
        <View style={styles.cityDetail.container}>
            <Image
                source={background}
                style={styles.cityDetail.background}>
                <View
                    style={styles.cityDetail.header.container}>
                    <TouchableOpacity>
                        <Image
                            source={back}
                            style={styles.cityDetail.header.backBtn.image}
                        ></Image>
                    </TouchableOpacity>
                    <Text
                        style={styles.cityDetail.header.text}>
                        {selectedCity} Info</Text>
                </View>
                <View>
                    <View>
                        <Text>{address}</Text>
                    </View>
                    <View>
                        <Text>{location.lat}</Text>
                        <Text>{location.lng}</Text>
                    </View>
                </View>
            </Image>
        </View>
    )
}

export default CityInfo
