import { combineReducers } from 'redux';

import cities from './cities';
import spinnerState from './spinnerState';
import navigation from './navigation';
import selectedCity from './selectedCity';
import cityDetail from './cityDetail';
import { createReducer } from 'redux-orm';
import {orm} from '../models/models';


const todoApp = combineReducers({
  cities,
  spinnerState,
  navigation,
  selectedCity,
  cityDetail,
  orm : createReducer(orm)
})

export default todoApp
