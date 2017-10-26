import React, { Component } from 'react';
import './DeviceArea.css';

class DeviceArea extends Component {
    render() {
        return (
            <div className="phone-container">
                <div className="phone">
                    <div className="screen">
                        <div className="screen__number-container">
                            <p className="screen__number">0</p>
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