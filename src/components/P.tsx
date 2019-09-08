import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  p: {
    paddingVertical: 8,
    paddingHorizontal: 6
  },
  pLabel: {
    fontSize: 14,
    color: colors.black,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center'
  },
  pText: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'center'
  }
});

interface Props {
  text: string;
  label?: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class P extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.p, this.props.style]}>
        {this.props.label && (
          <Text style={styles.pLabel} allowFontScaling={false}>
            {this.props.label}
          </Text>
        )}
        <Text
          style={[styles.pText, this.props.styleText]}
          allowFontScaling={false}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default P;
