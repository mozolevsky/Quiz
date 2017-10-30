import React, { Component } from 'react';
import Header from './Header/Header';
import QuizDetails from './QuizDetails/QuizDetails';
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

const quizData = [
    {
        title: 'The following quiz will reveal your Ayurvedic body type. It’ll only take 2 minutes.',
        desc: 'When choosing your answers please think of your situation all round rather than what you currently feel.',
        button: {
            text: 'Start the body type quiz',
            style: 'arrow'
        }
    },
    {
        title: 'When it comes to your stature, you are…',
        questions: [
            {
                label: 'A',
                text: 'Very tall or very short, slight.'
            },
            {
                label: 'B',
                text: 'Medium, or average in height'
            },
            {
                label: 'C',
                text: 'You can be short, or larger, broader'
            },
        ],
    },
    {
        title: 'When it comes to your stature, you are…',
        questions: [
            {
                label: 'A',
                title: 'You find your skin tends to be dry, rough, or dull, and thin. ',
                text: 'You can see your veins. If you have acne, it’s mostly dry and bumpy, with blackheads.'
            },
            {
                label: 'B',
                title: 'You find your skin to be rosy, radiant, flushed, and warm. ',
                text: 'You are prone to freckles.  Your veins are less prominent. If you have acne, it’s red, irritated and angry looking.',
            },
            {
                label: 'C',
                title: 'Your skin is smooth, moist, thick, and pale. ',
                text: 'Your veins are not prominent. You have few freckles or moles. If you have acne, they are few, but greasy, with deep pustules.',
            },
        ]
    },
    {
        title: 'When it comes to your stature, you are…',
        questions: [
            {
                label: 'A',
                title: 'You find your skin tends to be dry, rough, or dull, and thin. ',
                text: 'You can see your veins. If you have acne, it’s mostly dry and bumpy, with blackheads.'
            },
            {
                label: 'B',
                title: 'You find your skin to be rosy, radiant, flushed, and warm. ',
                text: 'You are prone to freckles.  Your veins are less prominent. If you have acne, it’s red, irritated and angry looking.',
            },
            {
                label: 'C',
                title: 'Your skin is smooth, moist, thick, and pale. ',
                text: 'Your veins are not prominent. You have few freckles or moles. If you have acne, they are few, but greasy, with deep pustules.',
            },
        ]
    }
];


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            questionsAmount: 0
        }
    }

    componentWillMount() {
        let amount = 0;

        quizData.forEach((item) => {
            if (item.questions) {
                amount +=1;
            }
        });

        if (amount > 0) {
            this.setState({questionsAmount: amount});
        }
    }

    nextStep = () => {
        if (this.state.step < quizData.length - 1) {
            this.setState((prevState) => {
                return {
                    step: prevState.step + 1
                }
            });
        }
    };

    render() {
        const {step, questionsAmount} = this.state;

        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <Header/>
                    <div className="quiz__area">
                       <QuizDetails data={quizData[step]} toNextStep={this.nextStep}/>
                    </div>
                    <ProgressBar currentAnswer={step} totalAnswers={questionsAmount}/>
                </div>
                <div className="quiz__right-side">
                    <DeviceArea currentAnswer={step} totalAnswers={questionsAmount}/>
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