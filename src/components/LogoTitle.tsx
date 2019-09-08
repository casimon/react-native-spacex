import React from 'react';
import {Image, StyleSheet} from 'react-native';

import images from '../images';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 30,
    tintColor: colors.white,
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
