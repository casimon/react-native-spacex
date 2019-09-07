/**
 * @format
 */

import 'react-native';
import React from 'react';
import Title from '../Title';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders title with text', () => {
  const tree = renderer.create(<Title text="Test text prop" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders title with text and optional style prop', () => {
  const tree = renderer
    .create(<Title text="Test text" style={{margin: 2}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders title with text and optional styleText prop', () => {
  const tree = renderer
    .create(<Title text="Test text" styleText={{fontSize: 12}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
