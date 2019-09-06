import React from 'react';
import {View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import LogoTitle from '../components/LogoTitle';

import MissionCard from '../components/MissionCard';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MissionCard
          title="CRS-17"
          date="2019-05-04T06:48:00.000Z"
          thumbnail="https://images2.imgbox.com/fc/58/9UErD3ut_o.png"
        />
        <MissionCard
          title="CRS-17"
          date="2019-05-04T06:48:00.000Z"
          thumbnail="https://images2.imgbox.com/fc/58/9UErD3ut_o.png"
        />
        <MissionCard
          title="CRS-17"
          date="2019-05-04T06:48:00.000Z"
          thumbnail="https://images2.imgbox.com/fc/58/9UErD3ut_o.png"
        />
        <MissionCard
          title="CRS-17"
          date="2019-05-04T06:48:00.000Z"
          thumbnail="https://images2.imgbox.com/fc/58/9UErD3ut_o.png"
        />
      </View>
    );
  }
}

export default HomeScreen;
