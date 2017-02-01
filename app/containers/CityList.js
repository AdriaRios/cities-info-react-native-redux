import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { onCitySelected } from '../actions'
import {cities} from '../selectors';

import List from '../components/List';


const mapStateToProps = (state) => {
    console.log('Cities', cities(state));
    return ({
      cities: cities(state),
      spinnerState: state.spinnerState
    })
}

const mapDispatchToProps =  (dispatch) => {
    return ({
      onCitySelected: (city) =>{
          dispatch(onCitySelected(city));
      }
    })
}

const CitiesInfo = connect(mapStateToProps, mapDispatchToProps)(List);

export default CitiesInfo;
