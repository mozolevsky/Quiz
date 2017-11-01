import React, { Component } from 'react';
import { Line } from 'rc-progress';
import PropTypes from 'prop-types';
import './FinalCalculationBar.css';

class FinalCalculationsBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        };

        this.animateProgress = this.animateProgress.bind(this);
    }

    animateProgress() {
        let timerId = setInterval(() => {

            if(this.state.progress >= 98) {
                clearInterval(timerId);
            }

            this.setState((prev) => {
                return {
                    progress: prev.progress + 1
                }
            });
        }, 100);
    }

    render() {
       const {toCalculate} = this.props;
       const {progress} = this.state;
       let finalCalcBlock = null;

       if (toCalculate) {
           if (progress === 0) {
               this.animateProgress();
           }

           finalCalcBlock = (
               <div className="final-calc">
                   <p className="final-calc__progress">{progress}%</p>
                   <Line
                       percent={progress}
                       strokeWidth="0.5"
                       strokeColor="#7c5cd1"
                       trailColor="transparent"
                       style={{width: '100%'}}
                   />
               </div>
           )
       }

        return (
            <div>
                {finalCalcBlock}
            </div>
        );
    }
}

FinalCalculationsBar.PropTypes = {
    toCalculate: PropTypes.bool
};

export default FinalCalculationsBar;
