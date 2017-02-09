import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';

import styles from '../styles';

const background = require('../assets/images/sky.jpg');
const back = require('../assets/images/back.png');
const fakeMap = require('../assets/images/fakeMap.png');

const CityInfo = ({ selectedCity, address, location, onBackButton }) => {
  return (
    <View style={styles.cityDetail.container}>
      <Image
        source={background}
        style={styles.cityDetail.background}
      >
        <View
          style={styles.cityDetail.header.container}
        >
          <TouchableOpacity
            onPress={() => {
              onBackButton();
            }}
          >
            <Image
              source={back}
              style={styles.cityDetail.header.backBtn.image}
            />
          </TouchableOpacity>
          <Text
            style={styles.cityDetail.header.text}
          >
            {selectedCity} Info
          </Text>
        </View>
        <View
          style={styles.cityDetail.body.container}
        >
          <View>
            <Text
              style={styles.cityDetail.body.text}
            >
                City Description: {address}
            </Text>
          </View>
          <View
            style={styles.cityDetail.body.location}
          >
            <Text
              style={styles.cityDetail.body.text}
            >
              Latitude: {location.lat}
            </Text>
            <Text
              style={styles.cityDetail.body.text}
            >
                Longitude: {location.lng}
            </Text>
            <View
              style={styles.cityDetail.body.mapView}
            >
              <Image
                source={fakeMap}
                style={styles.cityDetail.body.map}
              />
            </View>

          </View>
        </View>
      </Image>
    </View>
  );
};

CityInfo.propTypes = {
  selectedCity: React.PropTypes.string.isRequired,
  address: React.PropTypes.string.isRequired,
  location: React.PropTypes.object.isRequired,
  onBackButton: React.PropTypes.func.isRequired,
};

export default CityInfo;
