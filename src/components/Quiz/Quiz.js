import React, { Component } from 'react';
import QuizDetails from './QuizDetails/QuizDetails';
import ProgressBarThin from './ProgressBar/ProgressBarThin/ProgressBarThin';
import ProgressBarThick from './ProgressBar/ProgressBarThick/ProgressBarThick';
import DeviceArea from './DeviceArea/DeviceArea';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';

import quizData from '../../data/quiz';
import logo from '../../img/logo.svg';
import './Quiz.css';



class Quiz extends Component {
    state = {
        step: 0,
        progress: 0,
        questionsAmount: 0,
        answers: [], 
        name: '',
        email: '',
        in: true,
        allowClicksPerQuizStep: true
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

    getDataFromForm = (name, email) => {
        this.setState({
            name,
            email
        });
    }

    calculateYogaType = () => {
        const {answers} = this.state;
        let typesData = {
            A: {
                name: 'vatta',
                count: 0,
                percentage: 0
            },
            B: {
                name: 'pitta',
                count: 0,
                percentage: 0
            },
            C: {
                name: 'kapha',
                count: 0,
                percentage: 0
            }
        };

        let totalAnsweredQuestions = 0;

        answers.forEach((answer) => {
            if (typesData[answer]) {
                typesData[answer].count += 1;
                totalAnsweredQuestions += 1;
            }
        });

        let typesDataArray = Object.values(typesData);
        typesDataArray.forEach((item) => {
            item.percentage = Math.round(item.count / totalAnsweredQuestions * 100);
        });

        typesDataArray.sort(function(a, b) {
            return b.percentage - a.percentage ;
        });

        let yogaType = 'unknown';
        let [max, middle, min] = typesDataArray;

        if (max.count > 0) {
            yogaType = max.name;

            if (max.percentage - middle.percentage < 5) {
                yogaType = `${max.name}-${middle.name}`;
            }
            if (max.percentage - min.percentage < 5) {
                yogaType = `${max.name}-${middle.name}-${min.name}`;
            }
        }

        this.setState({
            yogaType: yogaType,
            vatta: typesData.A.percentage,
            pitta: typesData.B.percentage,
            kapha: typesData.C.percentage
        });
    };

    nextStep = (answerType) => {
        const {step, progress, questionsAmount} = this.state;

        if (this.state.allowClicksPerQuizStep) {
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
                        in: !this.state.in,
                        step: prevState.step + 1,
                        allowClicksPerQuizStep: false
                    }
                })
            }
        }

        setTimeout(() => {
            this.setState((prevState) => {
                return {
                    allowClicksPerQuizStep: true
                }
            })
        }, 650);

        if (progress === questionsAmount) {
            this.calculateYogaType();
        }
    };

    sendRequest = () => {
        const {yogaType, name, vatta, pitta, kapha} = this.state;

        axios.post('/node-mailer', {
            name: this.state.name,
            email: this.state.email,
            link: `/report/type=${yogaType}&percentages=${vatta}-${pitta}-${kapha}&name=${name}`
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const {step, progress, questionsAmount, answers} = this.state;
        
        return (
            <div className="quiz">
                <div className="quiz__left-side">
                    <div className="quiz__progress-top">
                        <ProgressBarThick currentAnswer={progress} totalAnswers={questionsAmount}/>
                    </div>
                    <div className="quiz__area">
                        <CSSTransition
                            timeout={600}
                            classNames="fade"
                            in={this.state.in}
                        >
                            <QuizDetails
                                key={step}
                                data={quizData[step]}
                                answers={answers}
                                toNextStep={this.nextStep}
                                sendRequest={this.sendRequest}
                                dataFromForm={this.getDataFromForm}
                            />
                        </CSSTransition>
                    </div>
                </div>
                <div className="quiz__right-side">
                    <img src={logo} alt="" className="quiz__right-side-logo"/> 
                    <DeviceArea currentAnswer={progress} totalAnswers={questionsAmount}/>
                   <div className="quiz__answers-area">
                        <ProgressBarThin currentAnswer={progress} totalAnswers={questionsAmount}/>
                   </div>
                </div>
            </div>
        );
    }
}

export default Quiz;