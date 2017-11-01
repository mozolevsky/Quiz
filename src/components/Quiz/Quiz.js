import React, { Component } from 'react';
import Header from './Header/Header';
import QuizDetails from './QuizDetails/QuizDetails';
import ProgressBar from './ProgressBar/ProgressBar';
import DeviceArea from './DeviceArea/DeviceArea';
import TickList from './TickList/TickList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
        bigTitle: 'Cheers! You completed the quiz.',
        title: 'Please hold while we calculate the results…',
        desc: 'You’ll soon receive a detailed report of your Ayurvedic body type with food recomendations, nutritional tips and personalized meal plans.',
        calculations: true
    },
    {
        bigTitle: 'Here will be form'
    }
];


class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            progress: 0,
            questionsAmount: 0,
            answers: []
        };

        this.nextStep = this.nextStep.bind(this);
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

    nextStep(answerType) {
        if (this.state.step > 0) {
            this.setState((prevState) => {
                return {
                    progress: prevState.progress + 1
                }
            });
        }

        if (this.state.step < this.state.questionsAmount + 1) {
            this.setState((prevState) => {
                return {
                    step: prevState.step + 1,
                    answers: [...prevState.answers, answerType]
                }
            });
        }
    };

    render() {
        const {step, progress, questionsAmount} = this.state;

        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <Header/>
                    <div className="quiz__area">
                        <ReactCSSTransitionGroup
                            transitionName="quiz"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={1}>
                            <QuizDetails key={step} data={quizData[step]} toNextStep={this.nextStep}/>
                        </ReactCSSTransitionGroup>
                    </div>
                    <ProgressBar currentAnswer={progress} totalAnswers={questionsAmount}/>
                </div>
                <div className="quiz__right-side">
                    <DeviceArea currentAnswer={progress} totalAnswers={questionsAmount}/>
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