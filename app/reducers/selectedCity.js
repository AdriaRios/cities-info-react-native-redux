const selectedCity = (state = '', action) => {
  switch (action.type) {
    case 'OPEN_CITY_DETAIL':
      return action.city
    default:
      return state
  }
}

export default selectedCity
