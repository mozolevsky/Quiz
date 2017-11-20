import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';


const Quote = (props) => {
    const isShort = props.short ? 'quote_short' : '';

    return (
        <p className={`quote ${isShort}`}>{props.txt}</p>
    )
}

Quote.propTypes = {
    txt: PropTypes.string.isRequired
}

export default Quote;