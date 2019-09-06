import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  thumbnail: {
    width: 50,
    height: 50,
  },
});

interface Props {
  uri: string;
}

class Thumbnail extends React.Component<Props> {
  render() {
    return (
      <View>
        <Image
          style={styles.thumbnail}
          source={{
            uri: this.props.uri,
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default Thumbnail;
