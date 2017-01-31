import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onCitySelected } from '../actions'

import List from '../components/List';


const mapStateToProps = (state) =>  ({
  cities: state.cities,
  spinnerState: state.spinnerState
})

const mapDispatchToProps =  (dispatch) => ({
  onCitySelected: (city) =>{
      dispatch(onCitySelected(city));
  }
})


const CitiesInfo = connect(mapStateToProps, mapDispatchToProps)(List);

export default CitiesInfo;
