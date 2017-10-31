import React, { Component } from 'react';
import './DeviceArea.css';

class DeviceArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        }
    };

    componentWillReceiveProps(nextProps) {
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
        return (
            <div className="phone-container">
                <div className="phone">
                    <div className="screen">
                        <div className="screen__number-container">
                            <p className="screen__number">{this.state.progress}</p>
                            <p className="screen__number-text">complete</p>
                        </div>
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

export default DeviceArea;