import React from 'react';
import CityList from '../containers/CityList';
import AddCity from '../containers/AddCity';

import {Image, View, Text, StyleSheet} from 'react-native';

import styles from '../styles';

const background = require("../assets/images/sky.jpg");

const CitiesInfoApp = () => (
  <View
    style={styles.appStyle}
  >
      <Image
            source={background}
            style={{
                flex: 1,
                paddingTop: 30,
                width: null,
                height: null}}
            resizeMode="cover"
          >
              <View style={{
                backgroundColor: 'transparent',
                marginTop: 25,
                marginLeft: 25}}>
                <Text style={{fontSize: 40, color: '#fff',}}>Weather App</Text>
              </View>
             <CityList />
            <AddCity />
      </Image>
  </View>
)

export default CitiesInfoApp
