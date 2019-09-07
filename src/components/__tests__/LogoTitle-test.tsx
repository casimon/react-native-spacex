/**
 * @format
 */

import 'react-native';
import React from 'react';
import LogoTitle from '../LogoTitle';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders logo title', () => {
  const tree = renderer.create(<LogoTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});
