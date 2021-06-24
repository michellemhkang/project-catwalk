import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OverviewSect from '../../client/src/Components/OverviewSect/OverviewSect.jsx';
import StyleSelector from '../../client/src/Components/OverviewSect/StyleSelector/StyleSelector.jsx';

configure({ adapter: new Adapter() });

test('OverviewSect renders without crashing', ()=> {
  const wrapper = shallow(<OverviewSect/>);
  expect(wrapper.exists()).toBe(true);
})
