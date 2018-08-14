import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';
import tz from 'moment-timezone';
var moment = require('moment');
import css from '../dist/styles.css';

class SuggestedStock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id={css.mainContainer}>
            <div id={css.newslist}>
                <NewsList />
            </div> 
        <section id={css.suggestedSection}> 
            <header id={css.headerSuggested}>
              <div id={css.headerWrap}>
                <h2 id={css.header}> People Also Bought</h2>
              </div>
             </header>
            <StockList />
        </section>
        </div>
        )
    }
}


export default SuggestedStock;
window.SuggestedStock = SuggestedStock;