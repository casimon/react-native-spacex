/**
 * @format
 */

import 'react-native';
import React from 'react';
import Search from '../Search';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders search with empty search string', () => {
  const tree = renderer
    .create(<Search text="" onChangeText={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders search with search string text', () => {
  const tree = renderer
    .create(<Search text="CRS-17" onChangeText={() => null} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
