
//import * as React from 'react';
//jest.dontMock('../apps/demo/detail/store');
jest.dontMock('../apps/demo/detail/webapi');
//import AppStore from '../apps/demo/detail/store'
var Appstore = require('../apps/demo/detail/store').default;
var { getTopicsDetail } = require('../apps/demo/detail/webapi');

describe('store Model', function () {
  let store = new Appstore();

  beforeEach(function () {

  });

  it('should populate properties with data from github api', function () {

    console.log(getTopicsDetail(1).then(d => {
      console.log(d);
    }));
    expect(store.setTopicsDetail('1')).toBe(23);
  });
});