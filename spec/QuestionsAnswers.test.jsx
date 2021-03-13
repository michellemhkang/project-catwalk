import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import QuestionsAnswersSect from '../client/src/Components/QuestionsAnswersSect/QuestionsAnswersSect.jsx';
import QnAlist from '../client/src/Components/QuestionsAnswersSect/Q&AList.jsx';
import Question from '../client/src/Components/QuestionsAnswersSect/Question.jsx';
import AddQustion from '../client/src/Components/QuestionsAnswersSect/AddQuestion.jsx';
import Answers from '../client/src/Components/QuestionsAnswersSect/Answers.jsx';
import Pictures from '../client/src/Components/QuestionsAnswersSect/Pictures.jsx';
import AddAanswer from '../client/src/Components/QuestionsAnswersSect/AddAnswer.jsx';
import styles from '../client/src/Components/QuestionsAnswersSect/Question.modules.css';

configure({ adapter: new Adapter() });
// tests the questionsAnswerSect folder
test('QuestionandAnswesSect renders without crashing', ()=> {
  const wrapper = shallow(<QuestionsAnswersSect/>);
  expect(wrapper.exists()).toBe(true);
})


test('does the add question button render', ()=>{
  const wrapper = shallow( <AddQustion />)
  expect(wrapper.exists()).toBe(true);
})

test('test if question modal pops up and closes', ()=>{
  const component = mount(<QuestionsAnswersSect/>);
  component.find('button.Addque').simulate("click");
  expect(component.state().Add).toBe(true);
  component.find('button.Qbutton').simulate("click");
  expect(component.state().Add).toBe(false);
})

// testing QnAlist
test('does the Question list render without any questions', ()=>{
  const wrapper = shallow(<QnAlist QnAlist={[]}/>);
  expect(wrapper.exists()).toBe(true);
  }
  )

  test('does the Question list render with multiple questions', ()=>{
    const questObj = {
      answers: {},
    asker_name: "jacky96",
    question_body: "does it come in black?",
    question_date: "2020-07-02T00:00:00.000Z",
    question_helpfulness: 2,
    question_id: 0,
    reported: false
    }
    const questObj2 = {
      answers: {},
    asker_name: "mark98",
    question_body: "does it come in blue?",
    question_date: "2020-07-02T00:00:00.000Z",
    question_helpfulness: 23,
    question_id: 6,
    reported: false
    }
    var array = []
    array.push(questObj)
    array.push(questObj2)
    const wrapper = shallow(<QnAlist QnAlist={array}/>);
    expect(wrapper.exists()).toBe(true);
    }
    )

// testing question
test('does a the answer button function work', ()=>{
  const questObj = {
    answers: {},
  asker_name: "jacky96",
  question_body: "does it come in black?",
  question_date: "2020-07-02T00:00:00.000Z",
  question_helpfulness: 2,
  question_id: 0,
  reported: false
  }
  const wrapper = shallow( <Question  quest={questObj}/>)
  wrapper.find('button.addAnswerBtn').simulate("click");
  expect(wrapper.state().add).toBe(true);
})

test('does a question render', ()=>{
  const questObj = {
    answers: {},
  asker_name: "jacky96",
  question_body: "does it come in black?",
  question_date: "2020-07-02T00:00:00.000Z",
  question_helpfulness: 2,
  question_id: 0,
  reported: false
  }
  const wrapper = shallow( <Question  quest={questObj}/>)
  expect(wrapper.exists()).toBe(true);
})



// testing answers
test('does the add question button render', ()=>{
  var answerObj = {answerer_name: "know_it_all_andy",
  body: "uh actually no it does not ",
  date: "2020-07-02T00:00:00.000Z",
  helpfulness: 66,
  id: 80085,
  photos: []}
  const wrapper = shallow( <Answers answers={answerObj}/>)
  expect(wrapper.exists()).toBe(true);
})


// pictures
test("Modal open & closes onClick", () => {
  const component = mount(<Pictures url={ "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80" }/>);
  component.find('img.image').simulate("click");
  expect(component.state().show).toBe(true);
  component.find('button.Mbutton').simulate("click");
  expect(component.state().show).toBe(false);
});

test('renders 0 pictures', ()=>{
  var answerObj = {answerer_name: "know_it_all_andy",
  body: "uh actually no it does not ",
  date: "2020-07-02T00:00:00.000Z",
  helpfulness: 66,
  id: 80085,
  photos: []}
  const wrapper = shallow( <Answers answers={answerObj}/>)
  expect(wrapper.contains(<Pictures />)).toBe(false)
})

test('renders a picture', ()=>{
  var answerObj = {answerer_name: "know_it_all_andy",
  body: "uh actually no it does not ",
  date: "2020-07-02T00:00:00.000Z",
  helpfulness: 66,
  id: 80085,
  photos: ["https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"]}
  const wrapper = mount( <Answers answers={answerObj}/>)
  expect(wrapper.contains(<Pictures url={'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80'} key={0}/>)).toBe(true)
})

//addAnswer
test('AddAnswer renders ', ()=> {
  const wrapper = mount(<AddAanswer add={true}/>);
  expect(wrapper.exists()).toBe(true);
})








