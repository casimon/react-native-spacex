import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Date from './Date';
import Title from './Title';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderBottom: '2',
    borderColor: '#000000',
    borderRadius: 6,
    shadowColor: '#e7e7eb',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});

interface Props {
  title: string;
  date: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class MissionCard extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.card, this.props.style]}>
        <Title text={this.props.title} />
        <Date date={this.props.date} format="llll" />
      </View>
    );
  }
}

export default MissionCard;
