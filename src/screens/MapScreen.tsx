import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import MapView, {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

import {listLaunchpads} from '../reducers';
import LogoTitle from '../components/LogoTitle';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});

interface State {
  data: [];
}

interface Props {
  navigation: NavigationScreenProp<NavigationParams>;
  launchpads: any;
  loading: boolean;
}

class PhotosScreen extends React.Component<Props, State> {
  static navigationOptions = {
    headerTitle: <LogoTitle />
  };

  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.props.listLaunchpads();
  }

  render() {
    const {launchpads, loading} = this.props;
    return loading ? (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#fff'}}>
        <ActivityIndicator size="large" color="#000" />
      </SafeAreaView>
    ) : (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: 40.705876,
            longitude: -99.9919877,
            latitudeDelta: 100,
            longitudeDelta: 0.28 * (width / height)
          }}>
          {launchpads.map((launchpad: any) => (
            <Marker
              key={launchpad.id}
              coordinate={{
                latitude: launchpad.location.latitude,
                longitude: launchpad.location.longitude
              }}
              title={launchpad.site_name_long}
              description={launchpad.details}
            />
          ))}
        </MapView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  let storedLaunchpads = state.launchpads.map((launchpad: any) => ({
    key: launchpad.id,
    ...launchpad
  }));
  let loading = state.loading;
  return {
    launchpads: storedLaunchpads,
    loading
  };
};

const mapDispatchToProps = {
  listLaunchpads
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosScreen);
