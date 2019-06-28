import React from "react";
import FetchNews from "./FetchNews";
import { expect } from 'chai';
import { shallow, mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// // import { async } from "q";
// import { getNews } from "./actions/getActions"
// import * as types from '../actions/types'

beforeAll(() => {
  global.fetch = jest.fn();
});
let wrapper;
beforeEach(() => {
   wrapper = shallow(<FetchNews/>, { disableLifecycleMethods: true });
});
afterEach(() => {
   wrapper.unmount();
});
it("must render a loading span before api call success", () => {
  expect(wrapper.find("span.spinner").exists()).toBeTruthy();
});