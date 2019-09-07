/**
 * @format
 */

import 'react-native';
import React from 'react';
import P from '../P';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders paragraph with text', () => {
  const tree = renderer.create(<P text="Test text prop" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders paragraph with text and optional label prop', () => {
  const tree = renderer
    .create(<P text="Test text" label="Test label" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders paragraph with text and optional style prop', () => {
  const tree = renderer
    .create(<P text="Test text" style={{margin: 2}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders paragraph with text and optional styleText prop', () => {
  const tree = renderer
    .create(<P text="Test text" styleText={{fontSize: 12}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
