import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  search: {
    padding: 16,
    paddingTop: 22
  },
  input: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 30,
    backgroundColor: '#ccc'
  }
});

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
}

class Search extends React.PureComponent<Props> {
  render() {
    return (
      <View style={[styles.search, this.props.style]}>
        <TextInput
          style={styles.input}
          onChangeText={this.props.onChangeText}
          value={this.props.text}
          allowFontScaling={false}
          autoCompleteType="off"
          autoCorrect={false}
          placeholder="Search launches e.g CRS-17"
          placeholderTextColor="#666"
        />
      </View>
    );
  }
}

export default Search;
