import React, { Component } from 'react';
import {
  BackAndroid,
  NavigationExperimental,
} from 'react-native';

import CitiesInfoApp from './CitiesInfoApp';
import CityDetail from '../containers/CityDetail';

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class NavRoot extends Component {
  constructor(props) {
    super(props);
    this._renderScene = this._renderScene.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this);
  }
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction);
  }
  _renderScene(props) {
    const { route } = props.scene
    if (route.key === 'cityList') {
      return <CitiesInfoApp />;
    } else if (route.key === 'cityDetail') {
      return <CityDetail />;
    }
    return 0;
  }
  _handleBackAction() {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute();
    return true;
  }
  _handleNavigate(action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route);
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction();
      default:
        return false;
    }
  }
  render() {
    return (
      <NavigationCardStack
        direction='horizontal'
        navigationState={this.props.navigation}
        onNavigateBack={(this._handleBackAction.bind(this))}
        onNavigate={(this._handleNavigate.bind(this))}
        enableGestures={true}
        renderScene={this._renderScene}
      />
    );
  }
}

export default NavRoot
