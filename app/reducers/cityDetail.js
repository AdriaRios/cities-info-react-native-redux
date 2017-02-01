import {SET_CITY_DETAIL} from '../constants/ActionTypes'

const cityDetail = (state = {}, action) => {
    switch (action.type) {
      case SET_CITY_DETAIL:
          return Object.assign({}, state, {
              location: action.cityDetail.location,
              address: action.cityDetail.address
          });
      default:
        return state
    }
}

export default cityDetail
