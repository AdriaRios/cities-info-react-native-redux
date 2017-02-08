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

})
