import { combineReducers } from 'redux';

import cities from './cities';
import spinnerState from './spinnerState';
import navigation from './navigation';
import selectedCity from './selectedCity';
import cityDetail from './cityDetail';

const todoApp = combineReducers({
  cities,
  spinnerState,
  navigation,
  selectedCity,
  cityDetail
})

export default todoApp
