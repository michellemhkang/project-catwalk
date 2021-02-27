import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RatingsAndReviewsSect from '../client/src/Components/RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';

configure({ adapter: new Adapter() });

test('RatingsAndReviewsSect renders without crashing', ()=> {
  const wrapper = shallow(<RatingsAndReviewsSect/>);
  expect(wrapper.exists()).toBe(true);
})