import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import QuestionsAnswersSect from '../client/src/Components/QuestionsAnswersSect/QuestionsAnswersSect.jsx';

configure({ adapter: new Adapter() });

test('RelatedProdctsSect renders without crashing', ()=> {
  const wrapper = shallow(<QuestionsAnswersSect/>);
  expect(wrapper.exists()).toBe(true);
})