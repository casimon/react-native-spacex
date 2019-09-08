/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings(['Warning:']);
YellowBox.ignoreWarnings(['Remote']);

AppRegistry.registerComponent(appName, () => App);
