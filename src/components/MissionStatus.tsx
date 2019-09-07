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
  missionStatus: {
    width: 100,
    marginHorizontal: 6,
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginVertical: 6
  },
  missionStatusText: {
    fontSize: 12,
    color: colors.white,
    textAlign: 'center'
  },
  success: {
    backgroundColor: '#359A53'
  },
  failure: {
    backgroundColor: '#9A3635'
  },
  tentative: {
    backgroundColor: '#D3BF47'
  }
});

interface Props {
  success?: boolean;
  tentative?: boolean;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}

class MissionStatus extends React.PureComponent<Props> {
  render() {
    const {success, tentative} = this.props;

    return (
      <View
        style={[
          styles.missionStatus,
          this.props.style,
          success
            ? styles.success
            : tentative
            ? styles.tentative
            : styles.failure
        ]}>
        <Text style={[styles.missionStatusText, this.props.styleText]}>
          {success ? 'Successful' : tentative ? 'Tentative' : 'Failure'}
        </Text>
      </View>
    );
  }
}

export default MissionStatus;
