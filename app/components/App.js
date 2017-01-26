import React, {Component} from 'react';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import CitiesInfoApp from '../components/CitiesInfoApp';
const store = createStore(reducer, {
    cities: ['TERRASSA', 'SABADELL', 'BARCELONA', 'ST JOAN DESPÍ', 'HOSPITALET',
    'ST. QUIRZE', 'BARBERÁ DEL VALLES']
    }, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CitiesInfoApp />
      </Provider>
    );
  }
 }
