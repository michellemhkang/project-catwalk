import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import RelatedProductsSect from '../client/src/Components/RelatedProductsSect/RelatedProductsSect.jsx';
import RelatedProductsList from '../client/src/Components/RelatedProductsSect/RelatedProductsList.jsx';
import YourOutfitsList from '../client/src/Components/RelatedProductsSect/YourOutfitsList.jsx';

configure({ adapter: new Adapter() });

//Section
test('RelatedProductsSect renders without crashing', ()=> {
  const wrapper = shallow(<RelatedProductsSect/>);
  expect(wrapper.exists()).toBe(true);
})


//Related Products List
// test('Related Products List has a header on the list', ()=> {
//   const wrapper = shallow(<RelatedProductsList/>);
//   // console.log(wrapper.find('#RelatedProductsListTitle').text());
//   expect(wrapper.find('#RelatedProductsListTitle').text()).toBe('Related Products');
// })

//Your Outfits List
test('Your Outfits List has a header on the list', () => {
  const wrapper = shallow(<YourOutfitsList/>);
  // console.log(wrapper.find('#YourOutfitsListTitle').text());
  expect(wrapper.find('#YourOutfitsListTitle').text()).toBe('Your Outfits');
})