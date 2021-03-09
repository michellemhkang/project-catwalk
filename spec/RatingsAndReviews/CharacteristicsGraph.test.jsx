import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import sinon from 'sinon';
import CharacteristicGraph from '../../client/src/Components/RatingsAndReviewsSect/CharacteristicGraph.jsx';

configure({ adapter: new Adapter() });

describe('<CharacteristicsGraph />', () => {
  let characteristics = {Comfort: {id: 50015, value: "2.5283018867924528"}}
  const wrapper = shallow(<CharacteristicGraph key={characteristics.Comfort.id} name={Object.keys(characteristics)[0]} value={characteristics.Comfort.value}/>);
  const labels = ['Uncomfortable', 'Ok', 'Perfect']
  const l = wrapper.find('.comparisonBarLabels');

  it('renders a child characteristics graph component', () => {
    expect(wrapper.find(`.comparisonBarTitle`)).toBeDefined();
    expect(wrapper.find(`.comparisonBarLine`)).toBeDefined();
    expect(wrapper.find(`.comparisonTriangle`)).toBeDefined();
  });

  it('displays the appropriate labels for the characteristic', () => {
    expect(l.at(0).text()).toEqual(expect.stringContaining(labels[0]));
  });
});
