import React from 'react';
import NewsIndividual from './newsIndividual.jsx';

var Newz = (props) => {
    var rows = [];

    for (var i = 1; i <= 3; i++) {
        rows.push(<NewsIndividual data={props.props} />)
    }
    return (
        <div>
            {rows}
        </div>
    )
}

export default Newz