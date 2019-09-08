import React from 'react';
import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import Title from './Title';
import colors from '../constants/colors';

const {width} = Dimensions.get('window');
const marginHorizontal = 16;

const styles = StyleSheet.create({
  card: {
    marginHorizontal,
    marginTop: 6,
    marginBottom: 6,
    flexDirection: 'column',
    backgroundColor: colors.black,
    borderRadius: 6,
    overflow: 'hidden'
  },
  cardInfo: {
    padding: 12,
    flex: 1
  },
  photo: {
    width: width - marginHorizontal * 2,
    height: ((width - marginHorizontal * 2) * 3) / 4
  }
});

interface Props {
  title: string;
  url: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class MissionPhoto extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.card, this.props.style]}>
        <View style={styles.cardInfo}>
          <Title text={this.props.title} styleText={{color: '#fff'}} />
        </View>
        <Image
          style={styles.photo}
          source={{
            uri: this.props.url
          }}
          resizeMode="cover"
        />
      </View>
    );
  }
}

export default MissionPhoto;
