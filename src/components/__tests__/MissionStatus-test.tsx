/**
 * @format
 */

import 'react-native';
import React from 'react';
import MissionStatus from '../MissionStatus';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders mission status with all props undefined', () => {
  const tree = renderer.create(<MissionStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders mission status with success false', () => {
  const tree = renderer.create(<MissionStatus success={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders mission status with success true', () => {
  const tree = renderer.create(<MissionStatus success={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders mission status with tentative false', () => {
  const tree = renderer.create(<MissionStatus tentative={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders mission status with tentative true', () => {
  const tree = renderer.create(<MissionStatus tentative={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});
