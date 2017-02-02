import {fk, attr, Model} from 'redux-orm';
import {ADD_CITY_WEATHER} from '../constants/ActionTypes';

class CityWeather extends Model {
    static reducer(action, CityWeather, session) {
        switch (action.type) {
            case ADD_CITY_WEATHER:
                CityWeather.create({weatherInfo: action.weather});
                break;
        }
    }
}
CityWeather.modelName = 'CityWeather';
CityWeather.fields = {
    id: attr(),
    weatherInfo: attr(),
};

export default CityWeather;
