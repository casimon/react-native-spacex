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
  missionStatus: {
    marginHorizontal: 6,
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: '#ccc',
    borderRadius: 2,
    marginVertical: 6,
  },
  missionStatusText: {
    fontSize: 14,
    color: '#333',
  },
  success: {
    backgroundColor: '#359A53',
  },
  failure: {
    backgroundColor: '#9A3635',
  },
  tentative: {
    backgroundColor: '#D3BF47',
  },
});

interface Props {
  success: boolean;
  tentative: boolean;
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
            : styles.failure,
        ]}>
        <Text style={[styles.missionStatusText, this.props.styleText]}>
          Status: {success ? 'Successful' : tentative ? 'Tentative' : 'Failure'}
        </Text>
      </View>
    );
  }
}

export default MissionStatus;
