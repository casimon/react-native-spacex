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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ccc',
    borderColor: '#000000',
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 12,
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
          <Title text={this.props.title} />
          <Date date={this.props.date} format="llll" />
        </View>
      </TouchableOpacity>
    );
  }
}

export default MissionCard;
