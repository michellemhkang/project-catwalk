import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import QuestionsAnswersSect from '../client/src/Components/QuestionsAnswersSect/QuestionsAnswersSect.jsx';
import QnAlist from '../client/src/Components/QuestionsAnswersSect/Q&AList.jsx'
import AddQustion from '../client/src/Components/QuestionsAnswersSect/AddQuestion.jsx';

configure({ adapter: new Adapter() });

test('QuestionandAnswesSect renders without crashing', ()=> {
  const wrapper = shallow(<QuestionsAnswersSect/>);
  expect(wrapper.exists()).toBe(true);
})

test('does the Question list render without crashing', ()=>{
const wrapper = shallow(<QnAlist QnAlist={[]}/>);
expect(wrapper.exists()).toBe(true);
}
)

test('does the add question button render', ()=>{
  const wrapper = shallow( <AddQustion />)
  expect(wrapper.exists()).toBe(true);
})