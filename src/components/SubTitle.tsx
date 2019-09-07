import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 6,
    paddingVertical: 3
  },
  titleText: {
    fontSize: 24,
    color: '#000000'
  }
});

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class SubTitle extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.title, this.props.style]}>
        <Text
          style={[styles.titleText, this.props.styleText]}
          allowFontScaling={false}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default SubTitle;
