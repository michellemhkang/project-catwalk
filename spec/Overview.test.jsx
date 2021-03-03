import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import OverviewSect from '../client/src/Components/OverviewSect/OverviewSect.jsx';

configure({ adapter: new Adapter() });

// test('RelatedProdctsSect renders without crashing', ()=> {
//   const wrapper = shallow(<OverviewSect/>);
//   expect(wrapper.exists()).toBe(true);
// })