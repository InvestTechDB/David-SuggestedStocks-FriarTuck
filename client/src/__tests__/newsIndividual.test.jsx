import React from 'react';
import NewsIndividual from '../components/newsIndividual.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

var data = {
    source: 'Yahoo Finance',
    title: 'Stocks, Stocks, and more Stocks',
    description: 'Investing.com-Technology Stocks',
    viewership: 466,
    url: '#',
    img: 'http://lorempixel.com/400/200',
    time: '7h'
}



test('renders', () => {
    const wrapper = shallow(<NewsIndividual data={data} />);

    expect(toJson(wrapper)).toMatchSnapshot();
})