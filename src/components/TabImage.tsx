import React from 'react';
import {Image, View} from 'react-native';

import images from '../images';

interface Props {
  iconName: string;
  color: string;
  size: number;
}

class TabImage extends React.Component<Props> {
  render() {
    const {iconName, color, size} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{width: size, height: size, tintColor: color}}
          source={images[iconName]}
          resizeMode="contain"
        />
      </View>
    );
  }
}

export default TabImage;
