import { orm } from '../models/models';
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

// Selects the state managed by Redux-ORM.
export const ormSelector = state => state.orm;

// Redux-ORM selectors work with reselect. To feed input
// selectors to a Redux-ORM selector, we use the reselect `createSelector`.

export const cities = createSelector(
    ormSelector,
    ormCreateSelector(orm, session => {
        // `.toRefArray` returns a new Array that includes
        // direct references to each User object in the state.
        return session.City.all().toRefArray().map((city) =>{ return {
            city: city.name
        }});
    })
);

export const citiesWeather = createSelector(
    ormSelector,
    ormCreateSelector(orm, session => {
        let cws = [...session.CityWeather.all().toRefArray()];
        cws.forEach((cityWeather) => {
            if (session.City.hasId(cityWeather.city)){
                cityWeather.city = session.City.withId(cityWeather.city).ref.name;
            }
        });
        return cws;
    })
);
