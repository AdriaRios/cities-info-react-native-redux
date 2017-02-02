import {attr, Model} from 'redux-orm';
import {ADD_CITY_INFO} from '../constants/ActionTypes';

class CityInfo extends Model {
    static reducer(action, CityWeather, session) {
        switch (action.type) {
            case ADD_CITY_INFO:
                CityWeather.create({location: action.location, address: action.address});
                break;
        }
    }
}
CityInfo.modelName = 'CityInfo';
CityInfo.fields = {
    id: attr(),
    location: attr(),
    address: attr()
};

export default CityInfo;
