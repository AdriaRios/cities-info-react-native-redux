import {factory} from 'factory-girl';

// factory-girl only works asynchronously with associated models,
// so we need to roll with that even though Redux-ORM is synchronous.
// We promisify factory-girl so we can use Promises instead of callbacks.

factory.define('City', 'City', {
    id: factory.sequence(n => n),
    name: factory.sequence(n => `User ${n}`),
    weather: factory.assoc('CityWeather', 'id'),
    info: factory.assoc('CityInfo', 'id'),
});

factory.define('CityInfo', 'CityInfo', {
    id: factory.sequence(n => n),
    address: factory.sequence(n => `Address ${n}`),
    location: {lat:20, lng: 40},
});

factory.define('CityWeather', 'CityWeather', {
    id: factory.sequence(n => n),
    weatherInfo: {info: 'Info'}
});




export default factory;
