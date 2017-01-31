import { combineReducers } from 'redux';

import cities from './cities';
import spinnerState from './spinnerState';
import navigation from './navigation';
import selectedCity from './selectedCity';

const todoApp = combineReducers({
  cities,
  spinnerState,
  navigation,
  selectedCity
})

export default todoApp
