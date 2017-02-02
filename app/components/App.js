import React, {Component} from 'react';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from '../reducers';

import NavigationRootContainer from '../containers/NavRootContainer';
const store = createStore(reducer, {}, applyMiddleware(thunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationRootContainer />
      </Provider>
    );
  }
 }
