import { combineReducers } from 'redux';

import spinnerState from './spinnerState';
import navigation from './navigation';
import selectedCity from './selectedCity';
import { createReducer } from 'redux-orm';
import {orm} from '../models';


const todoApp = combineReducers({
  spinnerState,
  navigation,
  selectedCity,
  orm : createReducer(orm)
})

export default todoApp
