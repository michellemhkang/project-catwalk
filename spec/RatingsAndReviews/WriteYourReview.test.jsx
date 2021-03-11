import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import WriteYourReview from '../../client/src/Components/RatingsAndReviewsSect/WriteYourReview.jsx';

configure({ adapter: new Adapter() });

describe('<WriteYourReview />', () => {
  let handleButtonClick = (e) => {console.log('button was clicked')};
  const mockCallBack = sinon.spy();
  let wrapper = shallow(<WriteYourReview/>);

  it('renders the child subcomponents', () => {
    expect(wrapper.find(WriteYourReview)).toBeDefined();
    expect(wrapper.find('.newReviewTitle')).toBeDefined();
    expect(wrapper.find('.newReviewSubtitle')).toBeDefined();
    expect(wrapper.find('.recText input')).toBeDefined();
    expect(wrapper.find('.sumAndBody')).toHaveLength(1);
    expect(wrapper.find('textarea')).toBeDefined();
    expect(wrapper.find('[data-test="nicknameField"]')).toBeDefined();
    expect(wrapper.find('[data-test="emailField"]')).toBeDefined();
    expect(wrapper.find('.submitReviewButton')).toBeDefined();
  });

});