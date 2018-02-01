import React, { Component } from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';
import './FinalCalculationBar.css';

class FinalCalculationsBar extends Component {
    state = {
        progress: 0
    };

    animateProgress = () => {
        let timerId = setInterval(() => {

            if (this.state.progress >= 100) {
                clearInterval(timerId);
                this.props.toNextStep();
                return;
            }

            this.setState((prev) => {
                return {
                    progress: prev.progress + 1
                }
            });
        }, 100);
    }

    componentDidMount = () => {
        this.animateProgress();
    }

    render() {
       const {progress} = this.state;
       return (
            <div className="final-calc">
                <p className="final-calc__progress">{progress}%</p>
                <Line
                    percent={progress}
                    strokeWidth="0.5"
                    strokeColor="#7c5cd1"
                    trailColor="transparent"
                    style={{width: '100%', height: '3px'}}
                />
            </div>
        );
    }
}

FinalCalculationsBar.propTypes = {
    toCalculate: PropTypes.bool
};

export default FinalCalculationsBar;
