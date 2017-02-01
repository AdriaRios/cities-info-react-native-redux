// models.js
import {fk, many, attr, Model, ORM} from 'redux-orm';
import {ADD_CITY} from '../constants/ActionTypes';

/********************* SE DEFINEN LOS MODELOS********************/

//CITY
class City extends Model {
    static reducer(action, City, session) {
        switch (action.type) {
            case ADD_CITY:
                if (!City.filter({ name: action.city.city }).exists()) {
                    City.create({ name: action.city.city });
                }
                break;
        }
    }
}
City.modelName = 'City';
City.fields = {
    name: attr()
};
City.options = {
    idAttribute: 'id',
};

//CITY WEATHER
class CityWeather extends Model {
    static reducer(action, City, session) {
        switch (action.type) {
            case ADD_CITY:
                if (!City.filter({ name: action.city.city }).exists()) {
                    City.create({ name: action.city.city });
                }
                break;
        }
    }
}
CityWeather.modelName = 'CityWeather';
CityWeather.fields = {
    id: attr(),
    weather: attr(),
    temperature: attr(),
    city: fk('City'),
};

//CITY INFO
class CityInfo extends Model {}
CityInfo.modelName = 'CityInfo';
CityInfo.fields = {
    id: attr(),
    location: attr(),
    address: attr(),
    city: fk('City'),
};

/********************* SE REGISTRAN LOS MODELOS********************/

export const orm = new ORM();
orm.register(City, CityWeather, CityInfo);
