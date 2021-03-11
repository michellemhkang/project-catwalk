import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import RatingGraph from '../../client/src/Components/RatingsAndReviewsSect/RatingGraph.jsx';

configure({ adapter: new Adapter() });

describe('<RatingGraph />', () => {
  it('renders each component of a single graph', () => {
    const wrapper = shallow(<RatingGraph />);
    expect(wrapper.find(`.distribution`)).toBeDefined();
    expect(wrapper.find(`.ratingLabel`)).toBeDefined();
    expect(wrapper.find(`.barGraph`)).toBeDefined();
    expect(wrapper.find(`.barFill`)).toBeDefined();
  });
});
