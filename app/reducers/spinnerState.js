const spinnerState = (state = false, action) => {
  switch (action.type) {
    case 'SET_SPINNER_STATE':
      return action.spinner
    default:
      return state
  }
}

export default spinnerState
