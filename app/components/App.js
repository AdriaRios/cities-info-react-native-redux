import React, {Component} from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import CitiesInfoApp from '../components/CitiesInfoApp';
const store = createStore(reducer, {
    cities: ['TERRASSA', 'SABADELL', 'BARCELONA', 'ST JOAN DESPÍ', 'HOSPITALET',
    'ST. QUIRZE', 'BARBERÁ DEL VALLES']
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CitiesInfoApp />
      </Provider>
    );
  }
 }
