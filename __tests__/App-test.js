/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import configureStore from '../store/configureStore';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const store = configureStore();
describe('Component', ()=> {
  it('Should Render', ()=> {
   const tree = renderer.create(
    <App store={store} />
   ).toJSON();
  });
});
