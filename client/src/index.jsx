import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';
import tz from 'moment-timezone';
var moment = require('moment');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false
        }
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
        var style = {
            'background': this.state.close ? 'black' : 'white',
            'fontColor': this.state.close ? 'white' : 'black',
            'color': this.state.close ? 'white' : 'black'
        }

        return (
            <div id='mainContainer' style={style}>
                <div id='newslist'>
                    <NewsList />
                </div>
               <h2 id='header'><strong> People Also Bought </strong></h2>
                <div id='cssCarousel' style={style}> 
                    <div id='carouselOverflow'>
                        <StockList props={style}/>
                    </div>
                </div>
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));