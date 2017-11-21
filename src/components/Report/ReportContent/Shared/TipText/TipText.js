import React from 'react';
import PropTypes from 'prop-types';
import './TipText.css';
import tip from '../../../../../img/tip.svg';
import tipArrow from '../../../../../img/tip-arrow.svg';


const TipText = (props) => {
    return (
        <div className="tip-text">
            <img src={tip} alt="" className="tip-text__word"/>
            <img src={tipArrow} alt="" className="tip-text__arrow"/>

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