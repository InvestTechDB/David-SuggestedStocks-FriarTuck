import Stock from './stock.jsx';

var StockList = (props) => {
    var carousel1, carousel2, carousel3;
    carousel1 = carousel2 = carousel3 = [];

    for (var i = 0; i < 12; i++) {
        rows.push(<div className='stocks'><Stock /></div>);
    }

    return (
        <section className='carousel'>
            {rows}
        </section>
    )
}

export default StockList; 