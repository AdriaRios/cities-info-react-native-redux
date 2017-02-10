import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { pop } from '../actions'
import {cityDetail} from '../selectors';

import CityInfo from '../components/CityInfo';


const mapStateToProps = (state) => {
  const cityDetailInfo = cityDetail(state);
  return ({
    selectedCity: cityDetailInfo.name,
    location: cityDetailInfo.location,
    address: cityDetailInfo.address,
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    onBackButton: () => {
      dispatch(pop());
    },
  });
};

const CitiesInfo = connect(mapStateToProps, mapDispatchToProps)(CityInfo);

export default CitiesInfo;
