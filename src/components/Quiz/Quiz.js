import React, { Component } from 'react';
import Header from './Header/Header';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
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
                        <QuizTitle questionName="The following quiz will reveal your Ayurvedic body type. It’ll only take 2 minutes."/>
                        <QuizDescription questionDesc="When choosing your answers please think of your situation all round rather than what you currently feel."/>
                        <Button buttonName="Start the body type quiz"/>
                    </div>
                    <ProgressBar currentAnswer={3} totalAnswers={30}/>
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