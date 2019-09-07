import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Date from './Date';
import Title from './Title';
import Thumbnail from './Thumbnail';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.black,
    borderRadius: 6,
    marginHorizontal: 16,
    marginTop: 6,
    padding: 12,
    flexDirection: 'row',
  },
  cardInfo: {
    flex: 1,
  },
  thumbnail: {
    marginRight: 10,
  },
});

interface Props {
  title: string;
  date: string;
  thumbnail: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress: () => void;
}

class MissionCard extends React.PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        style={[styles.card, this.props.style]}
        onPress={this.props.onPress}>
        <Thumbnail
          url={this.props.thumbnail}
          width={50}
          height={50}
          style={styles.thumbnail}
        />
        <View style={styles.cardInfo}>
          <Title text={this.props.title} styleText={{color: colors.white}} />
          <Date
            date={this.props.date}
            format="llll"
            styleText={{color: colors.white}}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

export default MissionCard;
