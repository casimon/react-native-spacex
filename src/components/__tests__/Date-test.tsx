/**
 * @format
 */

import 'react-native';
import React from 'react';
import Date from '../Date';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders date correctly with date string', () => {
  const tree = renderer
    .create(<Date date="2019-05-04T06:48:00.000Z" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders date correctly with date string and optional style', () => {
  const tree = renderer
    .create(<Date date="2019-05-04T06:48:00.000Z" style={{margin: 2}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders date correctly with date string and optional styleText', () => {
  const tree = renderer
    .create(<Date date="2019-05-04T06:48:00.000Z" styleText={{fontSize: 14}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
