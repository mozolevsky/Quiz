import React from 'react';
import PropTypes from 'prop-types';
import './TopImg.css';


const TopImg = (props) => {
    return (
        <div className="top-img">
            <img src={props.source} alt={props.desc} className={`top-img__img top-img__img_${props.offset}`}/>
        </div>
    )
}

TopImg.propTypes = {
    source: PropTypes.string.isRequired,
    desc: PropTypes.string,
    offset: PropTypes.string
}

export default TopImg;