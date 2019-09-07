import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
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

import colors from '../constants/colors';

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: colors.black,
    alignItems: 'center',
    paddingVertical: 24,
  },
  headerExtra: {
    backgroundColor: colors.black,
    alignItems: 'center',
    paddingBottom: 24,
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
    headerStyle: {backgroundColor: colors.black, borderBottomWidth: 0},
  };

  render() {
    const {navigation} = this.props;
    const item = navigation.getParam('item');
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          stickyHeaderIndices={[0]}>
          <View style={styles.header}>
            <Title
              text={item.mission_name}
              styleText={{fontSize: 24, color: colors.white}}
            />
          </View>
          <View style={styles.headerExtra}>
            <Hero url={item.links.mission_patch} />
            <P
              label="Launch site"
              text={item.launch_site.site_name_long}
              styleText={{fontSize: 14, color: colors.white}}
            />
            <Date
              date={item.launch_date_utc}
              format="llll"
              style={{marginVertical: 3}}
              styleText={{
                fontSize: 12,
                fontWeight: 'bold',
                color: colors.white,
              }}
            />
            <MissionStatus
              success={item.launch_success}
              tentative={item.is_tentative}
            />
          </View>
          <View style={styles.body}>
            <P label="Rocket" text={item.rocket.rocket_name} />
            <P
              label="Nationality"
              text={item.rocket.second_stage.payloads[0].nationality}
            />
            <P
              label="Manufacturer"
              text={item.rocket.second_stage.payloads[0].manufacturer}
            />
            <Divider />
            <P
              text={item.details}
              styleText={{fontSize: 14, lineHeight: 20, textAlign: 'left'}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DetailScreen;
