/**
 * @format
 */

import 'react-native';
import React from 'react';
import Thumbnail from '../Thumbnail';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders thumbnail correctly with missing image', () => {
  const tree = renderer.create(<Thumbnail />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders thumbnail correctly with patch image', () => {
  const tree = renderer
    .create(<Thumbnail url="https://images2.imgbox.com/12/47/6uim8L1a_o.png" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders thumbnail correctly with patch image and option style prop', () => {
  const tree = renderer
    .create(
      <Thumbnail
        url="https://images2.imgbox.com/12/47/6uim8L1a_o.png"
        style={{width: 30, height: 30}}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
