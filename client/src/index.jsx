import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';
import tz from 'moment-timezone';
var moment = require('moment');
import css from '../dist/styles.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     close: false
        // }
    }

    componentDidMount() {
        setInterval(() => {
            this.checkIfClose();
        }, 1000)
    }

    checkIfClose() {
        // var time = moment().tz('America/New_York').format('LT');
        // var today = new Date().getUTCHours();

        // if (today >= 14 && today <= 21) {
        //     this.setState({
        //         close: false
        //     })
        // } else {
        //     this.setState({
        //         close: true
        //     })
        // }

    }

    render() {
        // var style = {
        //     'background': this.state.close ? 'black' : 'white',
        //     'fontColor': this.state.close ? 'white' : 'black',
        //     'color': this.state.close ? 'white' : 'black'
        // }

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


export default App;




ReactDOM.render(<App />, document.getElementById('shayaun-root'));