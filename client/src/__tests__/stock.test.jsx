import React from 'react';
const $ = require('jquery');
import Stock from '../components/stock.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'


describe('testing stocks', () => {
    
    it('renders without error', () => {
         shallow(<Stock />);
    })
})