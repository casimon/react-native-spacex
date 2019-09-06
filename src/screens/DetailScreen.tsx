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
    alignItems: 'flex-start',
    padding: 24,
  },
});

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class DetailScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Hero url={item.links.mission_patch} />
          <Title text={item.mission_name} styleText={{fontSize: 24}} />
        </View>
        <View style={styles.body}>
          <SubTitle text="Details" />
          <Date date={item.launch_date_utc} format="llll" />
          <MissionStatus
            success={item.launch_success}
            tentative={item.is_tentative}
          />
        </View>
      </ScrollView>
    );
  }
}

export default DetailScreen;
