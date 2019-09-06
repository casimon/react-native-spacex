import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import Date from '../components/Date';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import Hero from '../components/Hero';
import LogoTitle from '../components/LogoTitle';
import MissionStatus from '../components/MissionStatus';
import P from '../components/P';
import Divider from '../components/Divider';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    paddingVertical: 24,
  },
  body: {
    alignItems: 'center',
    padding: 16,
  },
});

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class DetailScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerBackTitleStyle: {
      fontSize: 14,
    },
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Hero url={item.links.mission_patch} />
          <Title text={item.mission_name} styleText={{fontSize: 24}} />
          <Date
            date={item.launch_date_utc}
            format="llll"
            style={{marginVertical: 3}}
            styleText={{fontSize: 12, fontWeight: 'bold'}}
          />
          <MissionStatus
            success={item.launch_success}
            tentative={item.is_tentative}
          />
        </View>
        <View style={styles.body}>
          <P label="Launch site" text={item.launch_site.site_name_long} />
          <P
            label="Naitionality"
            text={item.rocket.second_stage.payloads[0].nationality}
          />
          <Divider />
          <P
            text={item.details}
            styleText={{fontSize: 14, lineHeight: 20, textAlign: 'left'}}
          />
        </View>
      </ScrollView>
    );
  }
}

export default DetailScreen;
