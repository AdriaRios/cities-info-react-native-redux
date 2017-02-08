import { orm } from '../../app/models';
import factory from './factories/factories';
import {ReduxORMAdapter } from './adapter/ReduxORMAdapter';



describe('ReduxORM models', () => {
    let session;
    beforeAll(done => {
        session = orm.session();
        factory.setAdapter(new ReduxORMAdapter(session));
        Promise.all([factory.createMany('CityWeather', 2), factory.createMany('CityInfo', 2)]).then(()=>{
            const totalCities = session.CityWeather.all().toRefArray().length;
            session.CityWeather.all().toRefArray().map(weather => {

                const weatherID = weather.id;
                factory.create('City', { weather: weatherID, info: weatherID }).then(() => {
                    done();
                    if(weatherID === totalCities -1 ){
                        done();
                    }
                });
            })
        })
    });

    it('Should have two cities', ()=>{

        expect(session.City.count()).toEqual(2);
    })
    it('Should have two cities weather', ()=>{
        expect(session.CityWeather.count()).toEqual(2);
    })
    it('Should have two cities info', ()=>{
        expect(session.CityInfo.count()).toEqual(2);
    })

    it('Should create one more City when action dispatched', ()=>{
        const citiesBeforeAction = session.City.count();
        const citiesAfterAction = session.City.count() + 1;

        const city = session.City;
        session.City.reducer({type: 'ADD_CITY_WEATHER', id: citiesBeforeAction + 1, name:'TERRASSA', cityWeatherId: 1} , city, session);

        expect(session.City.count()).toEqual(citiesAfterAction);
    })

    it('Should create one more City Weather when action dispatched', ()=>{
        const citiesWeatherAfterAction = session.CityWeather.count() + 1;

        const city = session.CityWeather;
        session.CityWeather.reducer({type: 'ADD_CITY_WEATHER', weatherIndo: {info: 'My Info'}} , city, session);

        expect(session.CityWeather.count()).toEqual(citiesWeatherAfterAction);
    })

    it('Should create one more City Weather when action dispatched', ()=>{
        const citiesInfoAfterAction = session.CityInfo.count() + 1;

        const cityInfo = session.CityInfo;
        session.CityInfo.reducer({type: 'ADD_CITY_INFO', location: {lat:50, lng: 25}, address:'Desengaño 21'} , cityInfo, session);
        expect(session.CityInfo.count()).toEqual(citiesInfoAfterAction);
    })

})
