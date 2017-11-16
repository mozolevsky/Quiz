import React from 'react';
import PropTypes from 'prop-types';
import './TipText.css';


const TipText = (props) => {
    return (
        <div className="tip-text">
            <p className="tip-text__title">{props.title}</p>
            <p className="tip-text__desc">{props.descFirst}</p>
            <p className="tip-text__desc">{props.descSecond}</p>
        </div>
    )
}

TipText.propTypes = {
    title: PropTypes.string.isRequired,
    descFirst: PropTypes.string.isRequired,
    descSecond: PropTypes.string.isRequired
}

export default TipText;