// models.js
import {fk, many, oneToOne, attr, Model, ORM} from 'redux-orm';
import {ADD_CITY, ADD_CITY_WEATHER, ADD_CITY_INFO} from '../constants/ActionTypes';

import City from './city';
import CityInfo from './cityInfo';
import CityWeather from './cityWeather';

/********************* SE REGISTRAN LOS MODELOS********************/

export const orm = new ORM();
orm.register(City, CityWeather, CityInfo);
