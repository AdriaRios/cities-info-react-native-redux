import React, { PropTypes } from 'react'

import {Image, View, Text, ListView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

import assetsManager from '../services/assetsManager';
import styles from '../styles';

const getTemperature = (weatherInfo) =>{
    let temperature = 0;
    if (weatherInfo && weatherInfo.DailyForecasts){
        const max = weatherInfo.DailyForecasts[0].Temperature.Maximum.Value;
        const min = weatherInfo.DailyForecasts[0].Temperature.Minimum.Value;
        const tempAverage = (min + max) / 2;
        const tempToCelsius = (tempAverage - 32) / 1.8;

        temperature = Math.trunc(tempToCelsius);
    }
    return  `${temperature}º`;
}

const getWeatherIcon = (weatherInfo) =>{
    let category = 1;
    if (weatherInfo && weatherInfo.DailyForecasts){
        category = weatherInfo.DailyForecasts[0].Day.Icon;
    }
    return  assetsManager.weatherIcons[`icon${category}`];
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const List = ({cities, spinnerState}) => (
    <View style={styles.citiesList.container}>
        <Spinner visible={spinnerState}></Spinner>
        <ListView
            dataSource={ds.cloneWithRows(cities)}
            renderRow={(rowData) =>
                <View
                    style={styles.citiesList.row.container}>
                    <Image
                          source={getWeatherIcon(rowData.weatherInfo)}
                          style={styles.citiesList.row.iconImage}>
                    </Image>

                    <Text style={styles.citiesList.row.cityText}>{rowData.city}</Text>
                    <Text style={styles.citiesList.row.temperatureText}>{getTemperature(rowData.weatherInfo)}</Text>
                </View>
            }
          />
    </View>
);

List.propTypes = {
  cities: PropTypes.array
}

export default List
