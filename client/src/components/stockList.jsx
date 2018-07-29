import React from 'react';
import Stock from './stock.jsx';

class StockList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pixel: 0,
            count: 1,
        }
    }

    populateCarousel() {
        var carousel = [];

        for (var i = 1; i <= 12; i++) {
            carousel.push(<Stock />);
        }
    
        return carousel;
    }

    movingRight(event) {
        event.preventDefault()
        var current = this.state.pixel;
        current += 510; 

        this.setState({
            pixel: current,
            count : this.state.count + 1
        })
    }

    movingLeft(event) {
        event.preventDefault();
        var current = this.state.pixel;
        current -= 510; 

        this.setState({
            pixel: current,
            count : this.state.count - 1
        })
    
    }

    render() {
        var style = this.props.props;

        return (
            <div id='cssCarousel'>

            <div className='left'>
                {this.state.count === 2 || this.state.count === 3 ? <a href='#' onClick={this.movingLeft.bind(this)}> <svg width="11" height="17" viewBox="0 0 11 17"><g fillRule="evenodd" transform="rotate(45 1.243 3)"><rect width="12" height="3"></rect><rect width="3" height="12" x="9"></rect></g></svg>
                </a> : null }
            </div>

            <div id='currentScene'>
                <div className='slide' style= {{
                'marginLeft': `-${this.state.pixel}px`,
                'WebkitTransition': 'all 0.3s ease-in-out',
                'MozTransition':'all 0.3s ease-in-out',
                'OTransition':'all 0.3s ease-in-out',
                'transition':'all 0.3s ease-in-out',
            }}>
                {this.populateCarousel('hello')}
            </div>
            </div>



            <div className='right'>
            {this.state.count === 1 || this.state.count === 2 ? <a href='#' style={style} onClick={this.movingRight.bind(this)}> <svg width="11" height="17" viewBox="0 0 11 17"><g fillRule="evenodd" transform="rotate(45 1.243 3)"><rect width="12" height="3"></rect><rect width="3" height="12" x="9"></rect></g></svg>
            </a> : null }
            </div>

            </div>
            
    
        )
    }
}

export default StockList; 

function populateCarousel() {
    var carousel = [];

    for (var i = 1; i <= 12; i++) {
        carousel.push(<div className='stocks' key={i.toString()} value={i}><Stock /></div>);
    }

    return carousel;
}
