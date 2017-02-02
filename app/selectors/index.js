import { orm } from '../models';
import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector } from 'redux-orm';

// Selects the state managed by Redux-ORM.
export const ormSelector = state => state.orm;

// Redux-ORM selectors work with reselect. To feed input
// selectors to a Redux-ORM selector, we use the reselect `createSelector`.

export const cities = createSelector(
    ormSelector,
    ormCreateSelector(orm, session => {
        let cityArrayModel = [...session.City.all().toModelArray()];
        cityArrayModel.map(city => {
            const obj = Object.assign({}, city.ref);
            obj.weather = city.weather.ref;
            return obj;
        });
        return cityArrayModel
    })
);

export const cityDetail = createSelector(
    ormSelector,
    state => state.selectedCity.city,
    ormCreateSelector(orm, (session, selectedCity) => {
        const city = session.City.withId(selectedCity);
        const cityInformation = city.info.ref;
        const cityName = city.name;
        return {name: cityName, location: cityInformation.location, address: cityInformation.address}
    })
);
