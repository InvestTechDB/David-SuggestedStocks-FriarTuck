class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            analystRating: '60%',
            price: '$192.20'

        }
    }

    render() {
        return (
            <a href='#'>
            <div> 
                <div> 
                    <p className='individualWrapper'><strong>Apple </strong></p>
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
                    <span> + <span> 0.95% </span> </span>
                </div>
            </div>
            </a>
        )
    }

}


export default Stock;