import Newz from './news.jsx';

class NewsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                source: 'Yahoo Finance',
                title: 'Stocks, Stocks, and more Stocks',
                description: 'Investing.com-Technology Stocks',
                viewership: 466,
                url: '#',
                img: 'http://lorempixel.com/400/200'
            
        }
    }
}

    render() {
    return (
        <div>
        <div id='newsMainHead'>
        <h2><strong> News </strong></h2>
        <h6> Show More </h6>
        </div>
        <div>
        <Newz props={this.state.data} />
        <a href='#' />
        </div>
        </div>
    )
    }

}


export default NewsList