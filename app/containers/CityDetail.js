import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onCitySelected } from '../actions'

import CityInfo from '../components/CityInfo';


const mapStateToProps = (state) =>  ({
  selectedCity: state.selectedCity.city,
  location: state.cityDetail.location,
  address: state.cityDetail.address
})


const CitiesInfo = connect(mapStateToProps)(CityInfo);

export default CitiesInfo;
