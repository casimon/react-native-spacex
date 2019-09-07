import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './src/reducers';
import AppNavigator from './src/navigators';

const client = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
