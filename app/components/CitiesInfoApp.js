import React from 'react';
import { Image, View, Text } from 'react-native';
import CityList from '../containers/CityList';
import AddCity from '../containers/AddCity';
import styles from '../styles';

const background = require('../assets/images/sky.jpg');

const CitiesInfoApp = () => (
  <View
    style={styles.appStyle.container}
  >
    <Image
      source={background}
      style={styles.appStyle.background}
      resizeMode="cover"
    >
      <View style={styles.appStyle.header.container}>
        <Text style={styles.appStyle.header.text}>Weather App</Text>
      </View>
      <CityList />
      <AddCity />
    </Image>
  </View>
);

export default CitiesInfoApp;
