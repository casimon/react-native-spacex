import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

type Props = NavigationInjectedProps;

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('About')}
        />
      </View>
    );
  }
}

export default HomeScreen