import {SET_SPINNER_STATE} from '../constants/ActionTypes'

const spinnerState = (state = false, action) => {
  switch (action.type) {
    case SET_SPINNER_STATE:
      return action.spinnerState
    default:
      return state
  }
}

export default spinnerState
