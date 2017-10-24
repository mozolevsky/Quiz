import React, { Component } from 'react';
import Header from './Header/Header';
import Title from './Title/Title';
import Description from './Description/Description';
import Button from './Button/Button';
import ProgressBar from './ProgressBar/ProgressBar';
import DeviceArea from './DeviceArea/DeviceArea';
import TickList from './TickList/TickList';

import './Quiz.css';


class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <Header/>
                    <div className="quiz__area">
                        <Title/>
                        <Description/>
                        <Button/>
                    </div>
                    <ProgressBar/>
                </div>
                <div className="quiz__right-side">
                    <DeviceArea/>
                    <TickList/>
                </div>
            </div>
        );
    }
}

export default Quiz;