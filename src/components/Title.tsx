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
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 16,
    color: '#000000',
  },
});

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class Title extends React.Component<Props> {
  render() {
    return (
      <View style={[styles.title, this.props.style]}>
        <Text style={[styles.titleText, this.props.styleText]}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

export default Title;
