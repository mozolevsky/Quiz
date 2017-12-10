import React, { Component } from 'react';
import Header from './Header/Header';
import QuizDetails from './QuizDetails/QuizDetails';
import ProgressBar from './ProgressBar/ProgressBar';
import DeviceArea from './DeviceArea/DeviceArea';
import TickList from './TickList/TickList';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import quizData from '../../data/quiz';
import listData from '../../data/listQuiz';
import './Quiz.css';

class Quiz extends Component {
    state = {
        step: 0,
        progress: 0,
        questionsAmount: 0,
        answers: []
    };

    componentWillMount = () => {
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

    nextStep = (answerType) => {
        const {step} = this.state;

        if (quizData[step].questions) {
            this.setState((prevState) => {
                return {
                    progress: prevState.progress + 1,
                    answers: [...prevState.answers, answerType]
                }
            });
        }

        if (step < quizData.length - 1) {
            this.setState((prevState) => {
                return {
                    step: prevState.step + 1,
                }
            });
        }
    };

    render() {
        const {step, progress, questionsAmount, answers} = this.state;

        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <Header/>
                    <div className="quiz__area">
                        <ReactCSSTransitionGroup
                            transitionName="quiz"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnterTimeout={500}
                            transitionLeave={false}
                            >
                            <QuizDetails
                                key={step}
                                data={quizData[step]}
                                answers={answers}
                                toNextStep={this.nextStep}
                            />
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