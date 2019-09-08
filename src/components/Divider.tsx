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
  divider: {
    backgroundColor: colors.grey,
    width: 120,
    height: 4,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 2
  }
});

interface Props {
  style?: StyleProp<ViewStyle>;
}

class Divider extends React.PureComponent<Props> {
  render() {
    return <View style={[styles.divider, this.props.style]}></View>;
  }
}

export default Divider;
