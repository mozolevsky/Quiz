import React from 'react';
import PropTypes from 'prop-types';
import './ColumnList.css';


const ColumnList = (props) => {
    return (
        <section className={`column-list column-list_${props.type}`} style={props.style}>
            {props.list.map((item, i) => <p key={i} className="column-list__item">{item}</p>)}
        </section>
    )
}

ColumnList.propTypes = {
    list: PropTypes.array.isRequired,
    style: PropTypes.object,
    type: PropTypes.string
}

export default ColumnList;