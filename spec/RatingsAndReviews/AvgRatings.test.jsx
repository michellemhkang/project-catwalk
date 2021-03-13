import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import AvgRatings from '../../client/src/Components/RatingsAndReviewsSect/AvgRatings.jsx';

configure({ adapter: new Adapter() });

describe('<AvgRatings />', () => {
  let rating = 4;

  it('renders <AvgRatings /> component', () => {
    const wrapper = shallow(<AvgRatings averageRating={rating} />);
    expect(wrapper.find(`.averageRatingNumber`)).toBeDefined();
  });

});
