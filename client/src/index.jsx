import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';
var faker = require('faker');

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            slideCount: 1
        };
    }

    slideNext() {
        // this.setState({
        //     slideCount: this.state.slideCount + 1
        // })
   
    }

    slidePrev() {
        // this.setState({
        //     slideCount: this.state.slideCount - 1
        // })


    }

    render() {
        return (
            <div id='mainContainer'>
                <div id='newslist'>
                    <NewsList />
                </div>
                <h2 id='header'><strong> People Also Bought </strong></h2>
                <div id='cssCarousel'> 

                    <div id='carouselOverflow'>
                    
                        <StockList count={this.state.slideCount} next={this.slideNext.bind(this)} prev={this.slidePrev.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));