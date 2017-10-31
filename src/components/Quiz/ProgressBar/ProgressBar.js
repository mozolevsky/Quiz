import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
import './ProgressBar.css';



class ProgressBar extends Component {
    render() {
        const {currentAnswer, totalAnswers, } = this.props;
        let percent = (currentAnswer / totalAnswers * 100) < 100 ? (currentAnswer / totalAnswers * 100) : 100;

        return (
            <div className="progress-line">
                <p className="progress-line__desc">{currentAnswer} of {totalAnswers} answered</p>
                <Line
                    percent={percent}
                    strokeColor="#7c5cd1"
                    trailColor="rgba(124, 91, 209, 0.15)"
                    style={{width: '80%'}}
                />
            </div>
        );
    }
}

ProgressBar.PropTypes = {
    currentAnswer: PropTypes.number,
    totalAnswers: PropTypes.number
};

export default ProgressBar;