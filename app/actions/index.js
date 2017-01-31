
export const addCity = (city) => ({
  type: 'ADD_CITY',
  city
})

export const setSpinnerState = (spinnerState) => ({
  type: 'SET_SPINNER_STATE',
  spinnerState
})

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
                        dispatch(addCity({city, weatherInfo}));
                    })
                }else{
                    dispatch(setSpinnerState(false));
                    dispatch(addCity('NOT FOUND CITY', {}));
                }
            })
    }
}
