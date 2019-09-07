/**
 * @format
 */

import 'react-native';
import React from 'react';
import Hero from '../Hero';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders hero correctly with missing image', () => {
  const tree = renderer.create(<Hero />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders hero correctly with patch image', () => {
  const tree = renderer
    .create(<Hero url="https://images2.imgbox.com/12/47/6uim8L1a_o.png" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
