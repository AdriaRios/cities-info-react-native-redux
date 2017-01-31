const spinnerState = (state = false, action) => {
  switch (action.type) {
    case 'SET_SPINNER_STATE':
      console.log('Spinner', action.spinnerState);
      return action.spinnerState
    default:
      return state
  }
}

export default spinnerState
