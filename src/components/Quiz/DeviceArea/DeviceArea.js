import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './DeviceArea.css';
import tickComplete from '../../../img/tick-complete.svg';

class DeviceArea extends Component {
    state = {
        progress: 0
    };

    componentWillReceiveProps = (nextProps) => {
       if (this.state.progress < 100) {
           let newProgress = Math.round(nextProps.currentAnswer / nextProps.totalAnswers * 100);

           let timerId = setInterval(() => {
               this.setState((prev) => {
                   return {
                       progress: prev.progress + 1
                   }
               });

               if (newProgress < this.state.progress) {
                   clearInterval(timerId);
                   this.setState((prev) => {
                       return {
                           progress: prev.progress - 1
                       }
                   });
               }

               if (this.state.progress === newProgress) {
                   clearInterval(timerId);
               }
           }, 50);
       }

    };

    render() {
        let progressBlock = (
            <div className="screen__number-container">
                <p className="screen__number">{this.state.progress}</p>
                <p className="screen__number-text">complete</p>
            </div>
        );

        if (this.state.progress === 100) {
            progressBlock = (
                <div className="screen__number-container">
                    <img src={tickComplete} alt="" className="screen__progress-img"/>
                </div>
            )
        }

        return (
            <div className="phone-container">
                <div className="phone">
                    <div className="screen">
                        {progressBlock}
                    </div>
                    <div className="phone__marker phone__marker_vitta">Vatta</div>
                    <div className="phone__marker phone__marker_pitta">Pitta</div>
                    <div className="phone__marker phone__marker_kapha">Kapha</div>
                </div>
                <div className="phone-container__marker phone-container__marker_vitta">Vatta</div>
                <div className="phone-container__marker phone-container__marker_pitta">Pitta</div>
                <div className="phone-container__marker phone-container__marker_kapha">Kapha</div>
            </div>
        )
    }
}

DeviceArea.PropTypes = {
    currentAnswer: PropTypes.number.isRequired,
    totalAnswers: PropTypes.number.isRequired
};

export default DeviceArea;