import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  p: {
    paddingVertical: 8,
  },
  pText: {
    fontSize: 12,
    color: '#000000',
  },
});

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class P extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.p, this.props.style]}>
        <Text style={[styles.pText, this.props.styleText]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default P;
