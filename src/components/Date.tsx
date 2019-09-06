import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import moment from 'moment';

const styles = StyleSheet.create({
  date: {
    flex: 1,
  },
  dateText: {
    fontSize: 12,
    color: '#333333',
  },
});

interface Props {
  date: string;
  format: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class Date extends React.Component<Props> {
  formatDateToLocal = (date: string, format: string) => {
    return moment
      .utc(date)
      .local()
      .format(format);
  };

  render() {
    const {date, format} = this.props;
    return (
      <View style={[styles.date, this.props.style]}>
        <Text style={[styles.dateText, this.props.styleText]}>
          {this.formatDateToLocal(date, format)}
        </Text>
      </View>
    );
  }
}

export default Date;
