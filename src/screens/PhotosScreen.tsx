import React from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';

import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import {connect} from 'react-redux';

import LogoTitle from '../components/LogoTitle';
import MissionPhoto from '../components/MissionPhoto';
import Search from '../components/Search';

interface State {
  search: string;
  data: [];
}

interface Props {
  navigation: NavigationScreenProp<NavigationParams>;
  launches: any;
  loading: boolean;
}

class PhotosScreen extends React.Component<Props, State> {
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

  filterLaunches = (text: string) => {
    const {launches} = this.props;
    const data = launches.filter((launch: any) =>
      launch.mission_name.toLowerCase().includes(text.toLowerCase())
    );
    this.setState({data});
  };

  onChangeText = (text: string) => {
    this.setState({search: text});
    this.filterLaunches(text);
  };

  keyExtractor = (item: any) => item.mission_name.replace(/\s/g, '');

  renderItem = ({item}: any) =>
    item.links.flickr_images.length > 0 ? (
      <MissionPhoto
        title={item.mission_name}
        url={item.links.flickr_images[0]}
      />
    ) : null;

  render() {
    const {launches, loading} = this.props;
    return loading ? (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
        <ActivityIndicator size="large" color="#000" />
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

export default connect(
  mapStateToProps,
  null
)(PhotosScreen);
