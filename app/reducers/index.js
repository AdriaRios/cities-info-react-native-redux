import { combineReducers } from 'redux'
import cities from './cities'
import spinnerState from './spinnerState'

const todoApp = combineReducers({
  cities,
  spinnerState
})

export default todoApp
