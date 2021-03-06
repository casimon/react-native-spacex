import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import moment from 'moment';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  date: {
    paddingHorizontal: 6,
    paddingVertical: 3
  },
  dateText: {
    fontSize: 12,
    color: colors.charcoal
  }
});

interface Props {
  date: string;
  format?: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class Date extends React.PureComponent<Props> {
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
        <Text
          style={[styles.dateText, this.props.styleText]}
          allowFontScaling={false}>
          {this.formatDateToLocal(date, format || 'llll')}
        </Text>
      </View>
    );
  }
}

export default Date;
