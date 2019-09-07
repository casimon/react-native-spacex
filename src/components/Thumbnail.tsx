import React from 'react';
import {Image, ImageStyle, View, StyleSheet, StyleProp} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
});

interface Props {
  width?: number;
  height?: number;
  url: string;
  style: StyleProp<ImageStyle>;
}

class Thumbnail extends React.PureComponent<Props> {
  render() {
    const {width, height, url, style} = this.props;
    return (
      <View>
        <Image
          style={[styles.image, style, {width, height}]}
          source={{
            uri: url
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default Thumbnail;
