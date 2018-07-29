import React from 'react';
import ReactDOM from 'react-dom';
import Newz from '../components/news.jsx';
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



test('renders without error', () => {
    shallow(<Newz data={data} />);

})