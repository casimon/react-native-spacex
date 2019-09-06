import React from 'react';
import {Image, ImageStyle, View, StyleSheet, StyleProp} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
});

interface Props {
  url: string;
}

class Hero extends React.PureComponent<Props> {
  render() {
    const {url} = this.props;
    return (
      <View style={{borderRadius: 10, overflow: 'hidden'}}>
        <Image
          style={styles.image}
          source={{
            uri: url,
          }}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default Hero;
