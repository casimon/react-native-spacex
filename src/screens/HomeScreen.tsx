import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {connect} from 'react-redux';

import {listLaunches} from '../reducers';
import LogoTitle from '../components/LogoTitle';
import MissionCard from '../components/MissionCard';
import Title from '../components/Title';
import data from '../data/mock';

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  componentDidMount() {
    this.props.listLaunches(30, 0);
  }

  onPress = (item: any) => {
    this.props.navigation.navigate('Detail', {item});
  };

  keyExtractor = (item: any) => item.mission_id[0];

  renderItem = ({item}: any) => (
    <MissionCard
      title={item.mission_name}
      date={item.launch_date_utc}
      thumbnail={item.links.mission_patch_small}
      onPress={() => this.onPress(item)}
    />
  );

  render() {
    return (
      <View style={{flex: 1}}>
        <Title text="Launches" styleText={styles.h1} />
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  let storedLaunches = state.launches.map((launch: any) => ({
    key: launch.mission_name,
    ...launch,
  }));
  return {
    launches: storedLaunches,
  };
};

const mapDispatchToProps = {
  listLaunches,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
