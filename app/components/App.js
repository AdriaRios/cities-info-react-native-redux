import React, {Component} from 'react';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers'

import CitiesInfoApp from '../containers/CitiesInfoApp';
const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CitiesInfoApp />
      </Provider>
    );
  }
 }
