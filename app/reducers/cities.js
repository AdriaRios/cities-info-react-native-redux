import {ADD_CITY} from '../constants/ActionTypes'

const cities = (state = [], action) => {
    switch (action.type) {
      case ADD_CITY:
          return [...state, action.city];
      default:
        return state
    }
}

export default cities
