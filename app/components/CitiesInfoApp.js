import React from 'react';
import CityList from '../containers/CityList';
import AddCity from '../containers/AddCity';

import {View, Text, StyleSheet} from 'react-native';

import styles from '../styles';


const CitiesInfoApp = () => (
  <View
    style={styles.citiesList}
  >
    <CityList />
    <AddCity />
  </View>
)

export default CitiesInfoApp
