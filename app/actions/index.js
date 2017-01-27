
export const addCity = (city) => ({
  type: 'ADD_CITY',
  city
})

export const getCityInfo = (city) => {
    return (dispatch)=>{
        return fetch(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&q=${city}&language=es`)
            .then(response => response.json())
            .then((json) =>{
                if(json[0] && json[0].Key){
                    fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${json[0].Key}?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&language=es`)
                    .then(response => response.json())
                    .then((weatherInfo) =>{
                        return dispatch(addCity({city, weatherInfo}));
                    })
                }else{
                    return dispatch(addCity('NOT FOUND CITY', {}));
                }
            })
    }
}
