import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RelatedProductsSect from '../client/src/Components/RelatedProductsSect/RelatedProductsSect.jsx';

configure({ adapter: new Adapter() });

test('RelatedProdctsSect renders without crashing', ()=> {
  const wrapper = shallow(<RelatedProductsSect/>);
  expect(wrapper.exists()).toBe(true);
})