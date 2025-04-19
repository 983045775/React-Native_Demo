/**
 * @format
 */

import {AppRegistry, UIManager, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
        console.log('开启了 layoutAnimation    ');
    }
}

AppRegistry.registerComponent(appName, () => App);
