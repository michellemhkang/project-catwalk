import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductInfo from '../../../client/src/Components/OverviewSect/ProductInfo/ProductInfo.jsx';

configure({ adapter: new Adapter() });

describe('<ProductInfo/>', () => {
  test('renders Product Info from Overview', () => {
    const wrapper = shallow(<ProductInfo />);
    expect(wrapper.exists()).toBe(true);
  })
});