import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import './ProgressBar.css';


const ProgressBar = (props) => {
    const {currentAnswer, totalAnswers, } = props;
    let percent = Math.round((currentAnswer / totalAnswers * 100) < 100 ? (currentAnswer / totalAnswers * 100) : 100);
    let isMobile = document.documentElement.clientWidth < 768;

    return (
        <div className="progress-line">
            <p className="progress-line__desc">{currentAnswer} of {totalAnswers} answered</p>
            <p className="progress-line__procent-mobile">{percent}%</p>
            <Line
                percent={percent}
                strokeLinecap={isMobile ? 'square' : 'round'}
                strokeColor={isMobile ? '#9270ef' : '#7c5cd1'}
                trailColor={isMobile ? '#514d55' : "rgba(124, 91, 209, 0.15)"}
                style={{height: isMobile ? '100%' : ''}}
            />
        </div>
    );
}

ProgressBar.PropTypes = {
    currentAnswer: PropTypes.number,
    totalAnswers: PropTypes.number
};

export default ProgressBar;