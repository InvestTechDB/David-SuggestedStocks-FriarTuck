import React from 'react';
import StockList from '../components/stockList.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';



test('renders', () => {
    const wrapper = shallow(<StockList />);

    expect(toJson(wrapper)).toMatchSnapshot();
})