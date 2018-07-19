import Stock from './stock.jsx';

var StockList = (props) => {
    var rows = [];

    for (var i = 0; i < 12; i++) {
        rows.push(<div class='stocks'><Stock /></div>);
    }

    return (
        <section class='carousel'>
            {rows}
        </section>
    )
}

export default StockList; 