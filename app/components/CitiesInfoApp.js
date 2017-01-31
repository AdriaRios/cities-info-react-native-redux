import React from 'react';
import CityList from '../containers/CityList';
import AddCity from '../containers/AddCity';
import Spinner from 'react-native-loading-spinner-overlay';

import {Image, View, Text, StyleSheet} from 'react-native';

import styles from '../styles';

const background = require('../assets/images/sky.jpg');

const CitiesInfoApp = () => (
  <View
    style={styles.appStyle.container}>
      <Image
            source={background}
            style={styles.appStyle.background}
            resizeMode="cover">
              <View style={styles.appStyle.header.container}>
                <Text style={styles.appStyle.header.text}>Weather App</Text>
              </View>
             <CityList />
            <AddCity />
      </Image>
  </View>
)

export default CitiesInfoApp
