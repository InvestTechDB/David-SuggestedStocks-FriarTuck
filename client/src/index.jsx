import StockList from './components/stockList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <div>
                <StockList />
                </div>
                <button> transition </button>
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));