import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import './ProgressBarThin.css';


const ProgressBarThin = (props) => {
    const {currentAnswer, totalAnswers, } = props;
    let percent = Math.round((currentAnswer / totalAnswers * 100) < 100 ? (currentAnswer / totalAnswers * 100) : 100);
    let lineStyles = {
        height: '10px',
        width: '100%',
        borderRadius: '6.5px',
        border: 'solid 1px rgba(124, 92, 209, 0.15)'
    }

    return (
        <div className="progress-thin">
            <p className="progress-thin__desc">{currentAnswer} of {totalAnswers} answered</p>
            <Line
                percent={percent}
                strokeLinecap={'round'}
                strokeColor={'#7c5cd1'}
                trailColor={"#fff"}
                style={lineStyles}
            />
        </div>
    );
}

ProgressBarThin.PropTypes = {
    currentAnswer: PropTypes.number,
    totalAnswers: PropTypes.number
};

export default ProgressBarThin;