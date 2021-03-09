import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import RatingsAndReviewsSect from '../../client/src/Components/RatingsAndReviewsSect/RatingsAndReviewsSect.jsx';


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
});

test("Modal open & closes onClick", () => {
  const component = mount(<RatingsAndReviewsSect />);
  component.find('[data-test="addReviewButton"]').simulate("click");
  expect(component.state().showModal).toBe(true);
  component.find("button.addNewButton").simulate("click");
  expect(component.state().showModal).toBe(false);
});

