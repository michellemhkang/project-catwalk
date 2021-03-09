import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import AvgRecs from '../../client/src/Components/RatingsAndReviewsSect/AvgRecs.jsx';

configure({ adapter: new Adapter() });

describe('<AvgRecs />', () => {
  let recommended = 50;
  const wrapper = shallow(<AvgRecs recsPercentage={recommended} />);
  const p = wrapper.find('.recText');

  it('renders correct percentage of reviews that recommended the product', () => {
    expect(wrapper.find(`.recText`)).toBeDefined();
    expect(p.text()).toEqual(expect.stringContaining('50'))
  });
});
