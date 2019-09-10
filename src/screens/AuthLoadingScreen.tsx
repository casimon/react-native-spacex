import React from 'react';

import {Image, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationParams, NavigationScreenProp} from 'react-navigation';
import LogoTitle from '../components/LogoTitle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  }
});

interface Props {
  navigation: NavigationScreenProp<NavigationParams>;
}

class AuthLoadingScreen extends React.Component<Props, {}> {
  componentDidMount() {
    this.bootstrap();
  }

  bootstrap = () => {
    const userToken = 'userToken';
    setTimeout(() => this.props.navigation.navigate(userToken && 'App'), 1000);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LogoTitle />
      </SafeAreaView>
    );
  }
}

export default AuthLoadingScreen;
