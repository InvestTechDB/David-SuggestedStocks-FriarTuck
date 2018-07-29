import React from 'react';
import ReactDOM from 'react-dom';
import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';
import tz from 'moment-timezone';
var moment = require('moment');

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
        <div id='mainContainer'>
            <div id='newslist'>
                <NewsList />
            </div>
        <section id='suggestedSection'> 
            <header id='headerSuggested'>
              <div id='headerWrap'>
                <h2 id='header'> People Also Bought</h2>
              </div>
             </header>
            <StockList />
        </section>
        </div>
        )
    }
}


export default App;




ReactDOM.render(<App />, document.getElementById('root'));