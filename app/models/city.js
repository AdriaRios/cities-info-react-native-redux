import {fk, attr, Model} from 'redux-orm';
import {ADD_CITY_WEATHER, ADD_CITY_INFO} from '../constants/ActionTypes';

class City extends Model {
    static reducer(action, City, session) {
        switch (action.type) {
            case ADD_CITY_WEATHER:
                if (!City.filter({ name: action.name }).exists()) {
                    City.create({ name: action.name});
                    City.withId(action.id).weather = action.cityWeatherId;
                }
            break;
            case ADD_CITY_INFO:
                City.withId(action.id).info = action.cityInfoId;
            break;
        }
    }
}
City.modelName = 'City';
City.fields = {
    name: attr(),
    weather: fk('CityWeather'),
    info: fk('CityInfo'),
};

export default City;
