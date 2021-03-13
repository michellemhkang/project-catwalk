import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RelatedProductsSect from '../../client/src/Components/RelatedProductsSect/RelatedProductsSect.jsx';
import RelatedProductsList from '../../client/src/Components/RelatedProductsSect/RelatedProductsList.jsx';
import YourOutfitsList from '../../client/src/Components/RelatedProductsSect/YourOutfitsList.jsx';
import NewEntry from '../../client/src/Components/RelatedProductsSect/NewEntry.jsx'
import YourOutfitAddCard from '../../client/src/Components/RelatedProductsSect/YourOutfitAddCard.jsx'
import dummydata from './dummydata.js';


configure({ adapter: new Adapter() });

//Section
test('RelatedProductsSect renders without crashing', ()=> {
  const wrapper = shallow(<RelatedProductsSect/>);
  expect(wrapper.exists()).toBe(true);
})

test('RelatedProductsSect should render div', ()=> {
  const wrapper = shallow(<RelatedProductsSect/>);
  expect(wrapper.find('div').exists()).toBe(true);
})


test('Related Products Header exists', ()=> {
  const wrapper = shallow(<RelatedProductsList RelatedProductsList={[]}/>);
  expect(wrapper.find("div.RelatedProductsHeader").text()).toBe('Related Products');
})

test('Should have a listslider for a list of data', () => {
  const wrapper = mount(<RelatedProductsList RelatedProductsList={dummydata}/>);
  // expect(wrapper.find("ul.listslider").children()).toBe(7);
  // expect(wrapper.find("ul.listslider")).toHaveLength(7)
  // expect(wrapper.text()).toEqual('asdf');
  expect(wrapper.find("ul.listslider").exists()).toBe(true);
})

test('Should be able to have clickable buttons', () => {
  const wrapper = mount(<RelatedProductsList RelatedProductsList={dummydata}/>);
  wrapper.find("i.leftbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(0)
  wrapper.find("i.rightbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(-350)
  wrapper.find("i.leftbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(0)
})

test('entry card test', () => {
  const wrapper = shallow(<NewEntry entry={dummydata[0]} />)
  expect(wrapper.text()).toEqual(expect.stringContaining('something'))
  expect(wrapper.text()).toEqual(expect.stringContaining('3'))
  expect(wrapper.text()).toEqual(expect.stringContaining('Rating'))
  expect(wrapper.text()).toEqual(expect.stringContaining('$123'))
  expect(wrapper.text()).toEqual(expect.stringContaining('name1'))
})

test('Outfit List Header exists', () => {
  const wrapper = shallow(<YourOutfitsList YourOutfitsList={[]}/>);
  expect(wrapper.find("div.RelatedProductsHeader").text()).toBe('Your Outfits');
})

test('Your Outfit List add card should contain the text add', () => {
  const wrapper = shallow(<YourOutfitAddCard/>)
    expect(wrapper.find("div.addcardtop").text()).toBe("Add to list")
})

test('Outfit list buttons should work when list is big enough', ()=> {
  const wrapper = mount(<YourOutfitsList YourOutfitsList={dummydata}/>);
  wrapper.find("i.leftbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(0)
  wrapper.find("i.rightbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(-350)
  wrapper.find("i.leftbutton").simulate('click')
  expect(wrapper.state('currentListLeft')).toEqual(0)
})