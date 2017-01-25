import React from 'react';
import { connect } from 'react-redux';
import { addCity } from '../actions'

import InputAndButton from '../components/InputAndButton';

const mapDispatchToProps =  (dispatch) => ({
  onAddCity: (city) =>{
      dispatch(addCity(city));
  }
})

const AddCity = connect(null, mapDispatchToProps)(InputAndButton);

export default AddCity;
