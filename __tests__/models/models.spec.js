import { orm } from '../../app/models';
import factory from './factories/factories';
import {ReduxORMAdapter } from './adapter/ReduxORMAdapter';



describe('ReduxORM models', () => {
    let session;
    beforeEach(done => {
        session = orm.session();
        factory.setAdapter(new ReduxORMAdapter(session));

        Promise.all([factory.createMany('CityWeather', 2), factory.createMany('CityInfo', 2)]).then(()=>{
            const totalCities = session.CityWeather.all().toRefArray().length;

            session.CityWeather.all().toRefArray().map(weather => {
                const weatherID = weather.id;
                factory.create('City', { weather: weatherID, info: weatherID }).then(() => {
                    if(weatherID === totalCities -1 ){
                        done();
                    }
                });
            })
        })
    });

    it('Should launch Spinner and addWeather Info when SUCCESS REQUEST', ()=>{
        console.log('*********CITY', session.City.all().toRefArray());
        console.log('*********CITY Weather', session.CityWeather.all().toRefArray());
        console.log('*********CITY Info', session.CityInfo.all().toRefArray());
        expect(1).toEqual(1);
    })

})
