import React from 'react';
import Newz from './news.jsx';
import css from '../../dist/styles.css';


class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                source: 'Yahoo Finance',
                title: 'Stocks, Stocks, and more Stocks',
                description: 'Investing.com-Technology Stocks',
                viewership: 466,
                url: '#',
                img: 'http://lorempixel.com/400/200',
                time: '7h'
            
        }
    }
}

    render() {
    return (
        <div>
         <div id={css.newsMainHead}>
            <h2><strong> News </strong></h2>
            <div id={css.showMore}>
            <h6> Show More </h6>
            <a href='#' />
            </div>
        </div>
        <div id={css.theNewz}>
            <Newz props={this.state.data} />
        <a href='https://www.google.com'/>
        </div>
        </div>
    )
    }

}


export default NewsList