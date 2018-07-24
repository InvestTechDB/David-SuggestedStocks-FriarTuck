import StockList from './components/stockList.jsx';
import NewsList from './components/newslist.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
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
                    
                        <StockList />
                    </div>
                </div>
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));