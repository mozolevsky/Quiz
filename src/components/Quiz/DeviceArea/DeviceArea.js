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
        let newProgress = Math.round(nextProps.currentAnswer / nextProps.totalAnswers * 100);

        let timerId = setInterval(() => {
           this.setState((prev) => {
               return {
                   progress: prev.progress + 1
               }
           });

            console.log(this.state.progress);
            if (this.state.progress === newProgress) {
                clearInterval(timerId);
            }

        }, 25);
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