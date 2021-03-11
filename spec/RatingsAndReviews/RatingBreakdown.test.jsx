import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import RatingBreakdown from '../../client/src/Components/RatingsAndReviewsSect/RatingBreakdown.jsx';
import RatingGraph from '../../client/src/Components/RatingsAndReviewsSect/RatingGraph.jsx';

configure({ adapter: new Adapter() });

describe('<RatingBreakdown />', () => {
  it('renders graph container for displaying ratings', () => {
    const wrapper = shallow(<RatingBreakdown />);
    expect(wrapper.find(`.graphContainer`)).toBeDefined();
  });
});

