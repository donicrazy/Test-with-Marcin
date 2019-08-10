/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import * as actions from '../actions';
import itemReducer from '../reducers';

describe('Action', ()=> {
  it('Get Item', ()=> {
    const expectedAction = {
      type: actions.GET_ITEM
     };
    expect(actions.getItem()).toEqual(expectedAction);
  })

  it('Received Item', ()=> {
    const json = {"a":"1"}
    const expectedAction = {
      type: actions.ITEM_RECEIVED,
     };
    expect(actions.itemReceived()).toEqual(expectedAction);
  })
})

describe('Reducers', ()=> {
  let state = {
    itemList: [],
    loading: false,
  };

  it('Should be initialState', ()=> {
    let reducer = itemReducer(undefined, {});
    expect(reducer).toEqual(state);
  });
  
  it('Should Item Recevied', ()=> {
    state = itemReducer(state, actions.getItem());
    expect(state.loading).toEqual(true);
  });
})