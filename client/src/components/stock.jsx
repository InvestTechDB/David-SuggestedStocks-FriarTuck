import $ from 'jquery';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            analystRating: '60%',
            price: '$192.20',
            change: '+',
            percent: '0.95%',
            instrument: 'Apple',
            index: ''
        }
    }

    componentDidMount() {
        $.get('/companies', (dat) => {
            var index = Math.floor(Math.random() * 100);
            var list = JSON.parse(dat);
            var stock = list[index];
            
            var percent = percentChange(stock.yesterdayClose.slice(1), stock.currentPrice.slice(1));

            this.setState({
                analystRating: stock.analystRating,
                price: stock.currentPrice,
                instrument: stock.name,
                index: stock.id
            })

            if (percent[0] === '-') {
                this.setState({
                    change: '-',
                    percent: percent.slice(1)
                })
            } else {
                this.setState({
                    change: '+',
                    percent: percent
                })
            }
        })

        setInterval(() => {
            var id = Math.floor(Math.random() * 100);
            $.get( `/companies/${id}`, (dat) => {
                var list = JSON.parse(dat);
                if (id === this.state.index) {
                    this.setState({
                        price: list[0].currentPrice
                    });

                    var percentT = percentChange(list[0].yesterdayClose.slice(1), list[0].currentPrice.slice(1));
                    if (percentT[0] === '-') {
                        this.setState({
                            change: '-',
                            percent: percentT.slice(1)
                        })
                    } else {
                        this.setState({
                            change: '+',
                            percent: percentT
                        })
                    }
        
                }

            });
        }, 100);
    }

    render() {
        return (
            <a href='#'>
            <div> 
                <div> 
                    <p className='individualWrapper'><strong>{this.state.instrument}</strong></p>
                </div>
                <div id='analystRating'> 
                    <div id='tag'>
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <g fillRule="evenodd" transform="translate(-4 -4)">
                            <path id="tagA" d="M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4">
                            </path>
                        </g>
                    </svg>
                    </div>
                    <div id='percent'>
                        <h6> {this.state.analystRating} </h6>
                    </div>
                </div>
                <div>
                    <h2> {this.state.price} </h2>
                    <span>{this.state.change}<span>{this.state.percent}</span> </span>
                </div>
            </div>
            </a>
        )
    }

}

/// percentChange helper function
var percentChange = (first, second) => {
    var numeral = ((Number(second) - Number(first)) / Number(first) * 100).toString();
    var toRound = numeral.split('.');
    var rounded = toRound[1].slice(0, 2);
    toRound[1] = rounded;
    return toRound.join('.') + '%';
}


export default Stock;