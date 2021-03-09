import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import RatingsAndReviewsSect from '../client/src/Components/RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';
import styles from '../client/src/Components/RatingsAndReviewsSect/reviews.module.css';

configure({ adapter: new Adapter() });

test('RatingsAndReviewsSect renders without crashing', ()=> {
  const wrapper = shallow(<RatingsAndReviewsSect/>);
  expect(wrapper.exists()).toBe(true);
})

describe('<RatingsAndReviewsSect />', () => {
  const minProps = {
    id: ''
  };

  it('calls componentDidMount', () => {
    sinon.spy(RatingsAndReviewsSect.prototype, 'componentDidMount');
    const wrapper = shallow(<RatingsAndReviewsSect />);
    expect(RatingsAndReviewsSect.prototype.componentDidMount).toHaveProperty('callCount', 1);
  });

  // it('allows us to receive props', () => {
  //   const wrapper = shallow(<RatingsAndReviewsSect {...minProps} id="1234" />);
  //   expect(wrapper.props().id).toBe('1234!');
  // });
});

test("Modal open & closes onClick", () => {
  const component = mount(<RatingsAndReviewsSect />);
  component.find('[data-test="addReviewButton"]').simulate("click");
  expect(component.state().showModal).toBe(true);
  component.find("button.addNewButton").simulate("click");
  expect(component.state().showModal).toBe(false);
});

// test('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

//   expect(checkbox.text()).toEqual('Off');

//   checkbox.find('input').simulate('change');

//   expect(checkbox.text()).toEqual('On');
// });