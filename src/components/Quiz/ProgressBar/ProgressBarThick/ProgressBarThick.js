import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import './ProgressBarThick.css';
import logo from '../../../../img/logo-white.svg';


const ProgressBarThick = (props) => {
    const {currentAnswer, totalAnswers, } = props;
    let percent = Math.round((currentAnswer / totalAnswers * 100) < 100 ? (currentAnswer / totalAnswers * 100) : 100);


    return (
        <div className="progress-thick">
            <img className="progress-thick__logo-img" src={logo} alt="" />
            <div>
                <p className="progress-thick__desc">{currentAnswer} of {totalAnswers} answered</p>
                <p className="progress-thick__procent">{percent}%</p>
            </div>
            <Line
                percent={percent}
                strokeLinecap={'square'}
                strokeColor={'#9270ef'}
                trailColor={'#514d55'}
                style={{height: '100%'}}
            />
        </div>
    );
}

ProgressBarThick.PropTypes = {
    currentAnswer: PropTypes.number,
    totalAnswers: PropTypes.number
};

export default ProgressBarThick;