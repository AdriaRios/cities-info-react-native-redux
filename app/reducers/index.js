const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_CITY':
          return Object.assign({}, state, {
            cities: [...state.cities, action.city]
          })
      default:
        return state
    }
}

export default reducer
