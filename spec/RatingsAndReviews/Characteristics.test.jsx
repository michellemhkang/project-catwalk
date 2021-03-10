import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import Characteristics from '../../client/src/Components/RatingsAndReviewsSect/Characteristics.jsx';

configure({ adapter: new Adapter() });

describe('<Characteristics />', () => {
  let charProps = {
    Comfort: {id: 50023, value: "2.9189189189189189"},
    Fit: {id: 50021, value: "3.1081081081081081"},
    Length: {id: 50022, value: "3.1621621621621622"},
    Quality: {id: 50024, value: "2.8378378378378378"},
    Size: {id: 50020, value: "2.123456"},
    Width: {id: 50025, value: "3.12345"}
  }

  const wrapper = shallow(<Characteristics characteristics={charProps} />);

  it('renders a row of radio buttons for each characteristic', () => {
    const radioRows = wrapper.find('.radioRow');
    expect(radioRows).toHaveLength(6);
    expect(radioRows.at(0).props().onChange).toBeDefined();
  });
});
