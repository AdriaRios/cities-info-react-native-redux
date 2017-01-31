import { combineReducers } from 'redux';

import cities from './cities';
import spinnerState from './spinnerState';
import navigation from './navigation';

const todoApp = combineReducers({
  cities,
  spinnerState,
  navigation
})

export default todoApp
