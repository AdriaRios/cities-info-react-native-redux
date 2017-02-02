import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onCitySelected } from '../actions'
import {cityDetail} from '../selectors';

import CityInfo from '../components/CityInfo';


const mapStateToProps = (state) => {
    const cityDetailInfo = cityDetail(state);
    return ({
      selectedCity: cityDetailInfo.name,
      location: cityDetailInfo.location,
      address: cityDetailInfo.address
    })
}

const CitiesInfo = connect(mapStateToProps)(CityInfo);

export default CitiesInfo;
