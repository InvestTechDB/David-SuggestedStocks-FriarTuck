import StockList from './components/stockList.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                <StockList />
            </div>
        )
    }
}







ReactDOM.render(<App />, document.getElementById('root'));