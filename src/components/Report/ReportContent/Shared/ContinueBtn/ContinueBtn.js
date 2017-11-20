import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ContinueBtn.css';


const ContinueBtn = (props) => {
    const title = props.title || 'Continue to';

    return (
       <div>
           <p className="continue-btn__mobile-title">{title}:</p>
            <Link className="continue-btn" to={props.link}>
                <span className="continue-btn__desctop-title">{title}</span>
                <span className="continue-btn__marked-txt">{props.txt}</span>
            </Link>
       </div>
    )
}

ContinueBtn.propTypes = {
    link: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired
}

export default ContinueBtn;