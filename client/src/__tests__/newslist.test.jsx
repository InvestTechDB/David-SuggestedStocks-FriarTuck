import React from 'react';
import NewsList from '../components/newslist.jsx';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

test('renders', () => {
    const wrapper = shallow(<NewsList />);

    expect(toJson(wrapper)).toMatchSnapshot();
})