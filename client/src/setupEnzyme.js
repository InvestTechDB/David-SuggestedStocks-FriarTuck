import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
global.jQuery = global.$ = require('../../node_modules/jquery/dist/jquery.min.js');


configure({ adapter: new Adapter() });
