import React from 'react';
import {Image, StyleSheet} from 'react-native';

import images from '../images';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 30,
    tintColor: '#fff',
    flex: 1
  }
});

class LogoTitle extends React.Component {
  render() {
    return (
      <Image style={styles.image} source={images.logo} resizeMode="contain" />
    );
  }
}

export default LogoTitle;
