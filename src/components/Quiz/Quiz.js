import React, { Component } from 'react';
import Header from './Header/Header';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import ProgressBar from './ProgressBar/ProgressBar';
import DeviceArea from './DeviceArea/DeviceArea';
import TickList from './TickList/TickList';

import './Quiz.css';

const listData = {
    listTitle: 'Your Ayurvedic Report',
    listItems: [
        'Understand your qualities and quirks',
        'Everyone will be on the same page',
        'Projects will get off the ground faster',
        'You’ll know exactly what’s going on',
        'You’ll free up time spent on meetings',
    ]
};

class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <Header/>
                    <div className="quiz__area">
                        <QuizTitle
                            questionName="The following quiz will reveal your Ayurvedic body type. It’ll only take 2 minutes."
                        />
                        <QuizDescription
                            questionDesc="When choosing your answers please think of your situation all round rather than what you currently feel."
                            visible={false}
                        />
                        <Button
                            buttonName="Start the body type quiz"
                            visible={false}
                        />
                    </div>
                    <ProgressBar currentAnswer={3} totalAnswers={30}/>
                </div>
                <div className="quiz__right-side">
                    <DeviceArea/>
                   <div className="quiz__list-area">
                       <TickList
                           listTitle={listData.listTitle}
                           listItems={listData.listItems}
                       />
                   </div>
                </div>
            </div>
        );
    }
}

export default Quiz;