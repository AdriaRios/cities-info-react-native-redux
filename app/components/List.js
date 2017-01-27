import React, { PropTypes } from 'react'

import {Image, View, Text, ListView} from 'react-native';
import styles from '../styles';

const cloud = require('../assets/images/weatherIcons/snow.png');
const rain = require('../assets/images/weatherIcons/rain.png');
const snow = require('../assets/images/weatherIcons/rain.png');
const sun = require('../assets/images/weatherIcons/sun.png');

const iconImages = {
    cloud, rain, snow, sun
}

const getWeatherIcon = (weatherInfo) =>{
    console.log('WeatherInfo', weatherInfo);
    return iconImages.cloud;
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const List = ({cities}) => (
    <View style={{height:400}}>
        <ListView
            dataSource={ds.cloneWithRows(cities)}
            renderRow={(rowData) =>
                <View
                    style={{
                        borderWidth: 1,
                        marginTop: 0,
                        borderBottomColor: '#CCC',
                        borderColor: 'transparent',
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: 70}}
                >
                <Image
                      source={getWeatherIcon(rowData.weatherInfo)}
                      style={{marginLeft: 5}}
                    >
                </Image>

                <Text
                    style={{
                        color: '#FFF',
                        marginLeft: 5,
                        backgroundColor:'transparent'
                    }}
                >{rowData.city}
                </Text>

                <Text
                    style={{
                        marginLeft: 200,
                        color: '#FFF',
                        backgroundColor:'transparent'
                    }}
                >{'17º '}
                </Text>
                </View>
            }
          />
    </View>
);

List.propTypes = {
  cities: PropTypes.array
}

export default List
