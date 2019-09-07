import React from 'react';
import {Image, StyleSheet} from 'react-native';
import images from '../images';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  }
});

interface Props {
  url?: string;
}

class Hero extends React.PureComponent<Props> {
  render() {
    const {url} = this.props;
    return url ? (
      <Image
        style={styles.image}
        source={{
          uri: url
        }}
        resizeMode="contain"
      />
    ) : (
      <Image
        style={[styles.image, {borderRadius: 6}]}
        source={images.missing}
        resizeMode="contain"
      />
    );
  }
}

export default Hero;
