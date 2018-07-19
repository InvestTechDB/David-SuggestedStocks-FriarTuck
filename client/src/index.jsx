import StockList from './components/stockList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIdx: 0
        };
    }

    render() {
        return (
            <div id='cssCarousel'> 
                <div id='carouselOverflow'>
                <StockList />
                </div>
                <button> transition </button>
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));