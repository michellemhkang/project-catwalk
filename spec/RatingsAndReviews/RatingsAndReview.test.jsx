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
  it('calls componentDidMount, getReviews, and getMetadata on load', () => {
    sinon.spy(RatingsAndReviewsSect.prototype, 'componentDidMount');
    sinon.spy(RatingsAndReviewsSect.prototype, 'getMetadata');
    sinon.spy(RatingsAndReviewsSect.prototype, 'getReviews');

    const wrapper = mount(<RatingsAndReviewsSect />);
    expect(RatingsAndReviewsSect.prototype.componentDidMount).toHaveProperty('callCount', 1);
    expect(RatingsAndReviewsSect.prototype.getMetadata).toHaveProperty('callCount', 1);
    expect(RatingsAndReviewsSect.prototype.getReviews).toHaveProperty('callCount', 1);
  });

  it('updates when receiving new props', () => {
      let previousId = 1234;
      sinon.spy(RatingsAndReviewsSect.prototype, 'componentDidUpdate');
      const wrapper = shallow(<RatingsAndReviewsSect  id={previousId} />);
      wrapper.setProps({ id: '14321' });
      expect(RatingsAndReviewsSect.prototype.componentDidUpdate).toHaveProperty('callCount', 1);
  });
});

test("Modal open & closes onClick", () => {
  const component = mount(<RatingsAndReviewsSect />);
  component.find('[data-test="addReviewButton"]').simulate("click");
  expect(component.state().showModal).toBe(true);
  component.find("button.addNewButton").simulate("click");
  expect(component.state().showModal).toBe(false);
});
