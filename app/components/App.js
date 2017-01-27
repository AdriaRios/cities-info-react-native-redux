import React, {Component} from 'react';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import CitiesInfoApp from '../components/CitiesInfoApp';
const store = createStore(reducer, {cities:[{city:'Terrassa'}, {city:'Terrassa'}]}, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CitiesInfoApp />
      </Provider>
    );
  }
 }
