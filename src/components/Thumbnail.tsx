import React from 'react';
import {Image, ImageStyle, View, StyleSheet, StyleProp} from 'react-native';
import images from '../images';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
});

interface Props {
  url?: string;
  style?: StyleProp<ImageStyle>;
}

class Thumbnail extends React.PureComponent<Props> {
  render() {
    const {url, style} = this.props;
    return (
      <View>
        {url ? (
          <Image
            style={[styles.image, style]}
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
        )}
      </View>
    );
  }
}

export default Thumbnail;
