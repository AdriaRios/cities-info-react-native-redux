import { POP_ROUTE, PUSH_ROUTE, ADD_CITY, ADD_CITY_WEATHER, SET_SPINNER_STATE, OPEN_CITY_DETAIL, SET_CITY_DETAIL} from '../constants/ActionTypes'

export function push (route) {
  return {
    type: PUSH_ROUTE,
    route
  }
}

export function pop () {
  return {
    type: POP_ROUTE
  }
}

export const addCity = (city) => ({
  type: ADD_CITY,
  city
})

export const addWeatherInfo = (city, weather) => ({
  type: ADD_CITY_WEATHER,
  weather: weather,
  city
})

export const openCityDetail = (city) => ({
  type: OPEN_CITY_DETAIL,
  city
})

export const setSelectedCityDetail = (cityDetail) => ({
  type: SET_CITY_DETAIL,
  cityDetail
})

export const setSpinnerState = (spinnerState) => ({
  type: SET_SPINNER_STATE,
  spinnerState
})

export const onCitySelected = (city) => {
    return (dispatch)=>{
        dispatch(setSpinnerState(true));
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=Terrassa&key=AIzaSyCjLJYPW9ebsH5Rps2ofoaHd39TVycnxHk`)
        .then(response => response.json())
        .then((json) =>{
            dispatch(setSelectedCityDetail({'location': json.results[0].geometry.location, 'address': json.results[0].formatted_address}))
            dispatch(setSpinnerState(false));
            dispatch(openCityDetail({city}));
            dispatch(push({'key': 'cityDetail'}));
        })
    }
}

export const getCityInfo = (city) => {
    return (dispatch)=>{
        dispatch(setSpinnerState(true));
        fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&q=${city}&language=es`)
            .then(response => response.json())
            .then((json) =>{
                if(json[0] && json[0].Key){
                    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${json[0].Key}?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&language=es`)
                    .then(response => response.json())
                    .then((weatherInfo) =>{
                        dispatch(setSpinnerState(false));
                        dispatch(addCity({city}));
                        console.log('CITY', city);
                        dispatch(addWeatherInfo(city, weatherInfo));
                    })
                }else{
                    dispatch(setSpinnerState(false));
                    dispatch(addCity('NOT FOUND CITY', {}));
                }
            })
    }
}
