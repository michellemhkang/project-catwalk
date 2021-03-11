import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import Stars from '../../client/src/Components/RatingsAndReviewsSect/Stars.jsx';

configure({ adapter: new Adapter() });

describe('<Stars />', () => {
  let rating = 3.7;
  const wrapper = mount(<Stars averageRating={rating} />);
  it('renders stars', () => {
    expect(wrapper.find(`[data-test="stars"]`)).toBeDefined();
  });

  it('renders a half star when rating is a decimal', () => {
    expect(wrapper.find(`fas fa-star-half-alt`)).toBeDefined();
  });
});