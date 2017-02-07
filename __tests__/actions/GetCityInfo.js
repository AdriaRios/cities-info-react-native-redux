import configureMockStore from 'redux-mock-store'
import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk'
import nock from 'nock'

import {getCityInfo} from '../../app/actions'
import {SET_SPINNER_STATE, ADD_CITY_WEATHER} from '../../app/constants/ActionTypes'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Get City Info Action', () => {
    afterEach(() => {
        nock.cleanAll();
    })
    // it('Should change Spinner State to true when launch action', ()=>{
    //     const expectedActions = [
    //         { type: SET_SPINNER_STATE, spinnerState: true }
    //     ]
    //
    //     const store = mockStore({});
    //     store.dispatch(getCityInfo());
    //     expect(store.getActions()).toEqual(expectedActions);
    // })

    it('Should launch Spinner and addWeather Info when SUCCESS REQUEST', ()=>{
        //Catched Request
        nock('https://dataservice.accuweather.com')
            .get('/locations/v1/cities/autocomplete?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&q=Barcelona&language=es')
            .reply(200,  [{"Version":3,"Key":"307297","Type":"City","Rank":21,"LocalizedName":"Barcelona","Country":{"ID":"ES","LocalizedName":"España"},"AdministrativeArea":{"ID":"CT","LocalizedName":"Cataluña"}},{"Version":1,"Key":"351847","Type":"City","Rank":31,"LocalizedName":"Barcelona","Country":{"ID":"VE","LocalizedName":"Venezuela"},"AdministrativeArea":{"ID":"B","LocalizedName":"Anzoátegui"}},{"Version":1,"Key":"34512","Type":"City","Rank":75,"LocalizedName":"Barcelona","Country":{"ID":"BO","LocalizedName":"Bolivia"},"AdministrativeArea":{"ID":"N","LocalizedName":"Pando"}},{"Version":1,"Key":"264410","Type":"City","Rank":75,"LocalizedName":"Barcelona","Country":{"ID":"PE","LocalizedName":"Perú"},"AdministrativeArea":{"ID":"MDD","LocalizedName":"Madre de Dios"}},{"Version":1,"Key":"40737","Type":"City","Rank":85,"LocalizedName":"Barcelona","Country":{"ID":"BR","LocalizedName":"Brasil"},"AdministrativeArea":{"ID":"RN","LocalizedName":"Río Grande del Norte"}}])
            .get('/forecasts/v1/daily/1day/307297?apikey=sFMTJmKWAXGp9GcbKcM8tIoXspyeBHMA&language=es')
            .reply(200,  {weatherInfo: 'myWeatherInfo'})
        //EXPECTED ACTIONS
        const expectedActions = [
            { type: SET_SPINNER_STATE, spinnerState: true },
            { type: SET_SPINNER_STATE, spinnerState: false },
            { type: ADD_CITY_WEATHER,
                weather: { weatherInfo: 'myWeatherInfo' },
                cityWeatherId: 0,
                name: 'Barcelona',
                id: 0 } ]

        const store = mockStore({});
        return store.dispatch(getCityInfo('Barcelona'))
        .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})
