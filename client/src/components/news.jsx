import React from 'react';
import NewsIndividual from './newsIndividual.jsx';
import css from '../../dist/styles.css';


var Newz = (props) => {
    var rows = [];

    for (var i = 1; i <= 3; i++) {
        rows.push(<NewsIndividual data={props.props} i={i} />)
    }
    return (
        <div>
            {rows}
        </div>
    )
}

export default Newz