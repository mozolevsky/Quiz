import React from 'react';
import PropTypes from 'prop-types';
import './IconTitle.css';

const IconTitle = (props) => {
    return (
        <div className="icon-title">
            <div className={`icon-title__icon-wrapper icon-title__icon-wrapper_${props.type}`}>
                <img src={props.src} alt="" className="icon-title__img"/>
            </div>
            <p className={`icon-title__title icon-title__title_${props.type}`}>{props.title}</p>
        </div>
    )
}

IconTitle.prppTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string
}

export default IconTitle;