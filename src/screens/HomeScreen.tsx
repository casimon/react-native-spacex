import React from 'react';
import {Button, View, Text} from 'react-native';

import MissionCard from '../components/MissionCard';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <MissionCard title="CRS-17" date="2019-05-04T06:48:00.000Z" />
        <MissionCard title="CRS-17" date="2019-05-04T06:48:00.000Z" />
        <MissionCard title="CRS-17" date="2019-05-04T06:48:00.000Z" />
        <MissionCard title="CRS-17" date="2019-05-04T06:48:00.000Z" />
      </View>
    );
  }
}

export default HomeScreen;
