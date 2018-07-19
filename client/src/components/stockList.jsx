import Stock from './stock.jsx';

var StockList = (props) => {
    var carousel1, carousel2, carousel3;
    carousel1 = carousel2 = carousel3 = [];

    carousel1 = populateCarousel(carousel1);
    carousel2 = populateCarousel(carousel2);
    carousel3 = populateCarousel(carousel3);

 
    return (
        <section className='carousel'>
        <div className='slide'>
            {carousel1}
        </div>
            <div className='slide'>
            {carousel2}
            </div>
            <div className='slide'>
            {carousel3}
            </div>
        </section>
    )
}

export default StockList; 

function populateCarousel(carousel) {
    for (var i = 1; i <= 4; i++) {
        carousel.push(<div className='stocks'><Stock /></div>);
    }

    return carousel;
}