/**
 * @format
 */

import 'react-native';
import React from 'react';
import Divider from '../Divider';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders divider correctly', () => {
  const tree = renderer.create(<Divider />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders divider correctly with optional style prop', () => {
  const tree = renderer.create(<Divider style={{height: 4}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
