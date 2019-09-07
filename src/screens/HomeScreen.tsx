import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {connect} from 'react-redux';

import {listLaunches} from '../reducers';
import LogoTitle from '../components/LogoTitle';
import MissionCard from '../components/MissionCard';
import Search from '../components/Search';

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    marginTop: 24,
    marginBottom: 16,
    textAlign: 'center'
  }
});

interface State {
  search: string;
  data: [];
}

interface Props {
  navigation: NavigationScreenProp<NavigationParams>;
  launches: any;
  loading: boolean;
}

class HomeScreen extends React.Component<Props, State> {
  static navigationOptions = {
    headerTitle: <LogoTitle />
  };

  constructor(props: any) {
    super(props);
    this.state = {
      search: '',
      data: []
    };
  }

  componentDidMount() {
    this.props.listLaunches(30, 0);
  }

  onPress = (item: any) => {
    this.props.navigation.navigate('Detail', {item});
  };

  filterLaunches = (text: string) => {
    const {launches} = this.props;
    const data = launches.filter((launch: any) =>
      launch.mission_name.includes(text)
    );
    this.setState({data});
  };

  onChangeText = (text: string) => {
    this.setState({search: text});
    this.filterLaunches(text);
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
        <Search text={this.state.search} onChangeText={this.onChangeText} />
        <FlatList
          initialNumToRender={8}
          data={this.state.data.length > 0 ? this.state.data : launches}
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
    ...launch
  }));
  let loading = state.loading;
  return {
    launches: storedLaunches,
    loading
  };
};

const mapDispatchToProps = {
  listLaunches
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
