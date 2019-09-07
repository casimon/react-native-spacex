import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

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
  launches: any;
  loading: boolean;
}

class HomeScreen extends React.PureComponent<Props> {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  componentDidMount() {
    this.props.listLaunches(30, 0);
  }

  onPress = (item: any) => {
    this.props.navigation.navigate('Detail', {item});
  };

  keyExtractor = (item: any) => item.mission_name.replace(/\s/g, '');

  renderItem = ({item}: any) =>
    item.links.mission_patch_small && (
      <MissionCard
        title={item.mission_name}
        date={item.launch_date_utc}
        thumbnail={item.links.mission_patch_small}
        onPress={() => this.onPress(item)}
      />
    );

  render() {
    const {launches, loading} = this.props;
    return loading ? (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
        <ActivityIndicator size="small" color="#000" />
      </SafeAreaView>
    ) : (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <Title text="Launches" styleText={styles.h1} />
        <FlatList
          data={launches}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  let storedLaunches = state.launches.map((launch: any, index: number) => ({
    key: launch.mission_name.replace(/\s/g, ''),
    ...launch,
  }));
  let loading = state.loading;
  return {
    launches: storedLaunches,
    loading,
  };
};

const mapDispatchToProps = {
  listLaunches,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
