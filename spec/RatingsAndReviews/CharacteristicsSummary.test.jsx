import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import CharacteristicsSummary from '../../client/src/Components/RatingsAndReviewsSect/CharacteristicsSummary.jsx';
import CharacteristicGraph from '../../client/src/Components/RatingsAndReviewsSect/CharacteristicGraph.jsx';

configure({ adapter: new Adapter() });

describe('<CharacteristicsSummary />', () => {
  let characteristics = {Comfort: {id: 50015, value: "2.5283018867924528"}}

  it('renders a child characteristics graph component', () => {
    const wrapper = shallow(<CharacteristicsSummary characteristics={characteristics}/>);
    expect(wrapper.containsMatchingElement(<CharacteristicGraph />)).toEqual(true);
  });
});
