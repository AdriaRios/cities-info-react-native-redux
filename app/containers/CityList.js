import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import List from '../components/List'


const mapStateToProps = (state) =>  ({
  cities: state.cities
})


const CitiesInfo = connect(mapStateToProps)(List)

export default CitiesInfo
