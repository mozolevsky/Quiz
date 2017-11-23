import React from 'react';
import PropTypes from 'prop-types';
import './Quote.css';


const Quote = (props) => {
    const isShort = props.short ? 'quote_short' : '';

    return (
        <div className={`quote ${isShort}`}>
            {
                props.txt.map((str, i) => {
                    return <p key={i} className="quote_text">{str}</p>
                })
            }
        </div>
    )
}

Quote.propTypes = {
    txt: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Quote;