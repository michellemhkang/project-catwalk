import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import ReviewCount from '../../client/src/Components/RatingsAndReviewsSect/ReviewCount.jsx';

configure({ adapter: new Adapter() });

describe('<ReviewCount />', () => {
  let reviewCount = 3;
  it('renders the review count with the correct number of reviews', () => {
    const wrapper = shallow(<ReviewCount reviewCount={reviewCount}/>);
    expect(wrapper.find(ReviewCount)).toBeDefined();
    expect(wrapper.text()).toEqual(expect.stringContaining('3'))
  });
});
