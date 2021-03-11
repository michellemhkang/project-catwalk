import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import ReviewListEntry from '../../client/src/Components/RatingsAndReviewsSect/ReviewListEntry.jsx';
import Stars from '../../client/src/Components/RatingsAndReviewsSect/Stars.jsx';

configure({ adapter: new Adapter() });

describe('<ReviewListEntry />', () => {
  const review = {
    "review_id": 11111,
    "rating": 5,
    "summary": "Really Great Product",
    "recommend": true,
    "response": null,
    "body": "This is a wonderful product",
    "date": "2020-08-05T00:00:00.000Z",
    "reviewer_name": "Maggie6",
    "helpfulness": 26,
  };

  it('renders the review data correctly', () => {
    let wrapper = shallow(<ReviewListEntry review={review}/>);
    let username = wrapper.find('[data-test="username"]');
    let body = wrapper.find(`.reviewBody`);
    let summary = wrapper.find(`.reviewTitle`);

    expect(wrapper.find(ReviewListEntry)).toBeDefined();
    expect(username.text()).toEqual(expect.stringContaining('Maggie6'))
    expect(body.text()).toEqual(expect.stringContaining('wonderful'))
    expect(summary.text()).toEqual(expect.stringContaining('Really Great Product'))
  });

  it('passes in the correct rating as props to the stars child component', () => {
    const starsWrapper = mount(<Stars rating={review.rating} />);
    expect(starsWrapper.props().rating).toEqual(5);
  });
});