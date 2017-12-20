import React from 'react';
import PropTypes from 'prop-types';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import Questions from './Questions/Questions';
import FinalCalculationsBar from './FinalCalculationsBar/FinalCalculationsBar';
import LoginForm from './Form/LoginForm';
import PasswordForm from './Form/PasswordForm';
import Wrapper from '../../hoc/Wrapper';
import QuizSubtitle from '../QuizDetails/QuizTitle/QuizSubtitle';


const QuizDetails = (props) => {
    const {data, toNextStep, answers, sendRequest, dataFromForm} = props;
    const quizTitleElem =  (   
        data.title &&
        <QuizTitle stepTitle={data.title} stepBigTitle={data.bigTitle}/>
    );

    const subtitleElem = data.subtitle && <QuizSubtitle subtitle={data.subtitle}/>;

    const startBtn = (
        data.button && data.button.type === 'start' &&
        <Button buttonData={data.button} toNextStep={toNextStep} />
    );

    const questionsElem = (
        data.questions &&
        <Questions
            stepQuestions={data.questions}
            toNextStep={toNextStep}
        />
    );

    const quizDescElem = data.desc && <QuizDescription stepDesc={data.desc}/>;
    const finalCalcElem = data.calculations && <FinalCalculationsBar toNextStep={toNextStep}/>;
    const formNameEmail = (
        data.isLogin &&
        <LoginForm
        dataFromForm={dataFromForm} 
        formData={data} 
        answers={answers} 
        toNextStep={toNextStep}/>
    );
    const formPassword = (
        data.isPassword &&
        <PasswordForm
        formData={data} 
        answers={answers} 
        toNextStep={toNextStep}/>
    );
    
    const finishBtn = (
        data.button && data.button.type === 'finish' &&
        <Button buttonData={data.button} toNextStep={sendRequest} />
    );

    return (
        <Wrapper>
            {formNameEmail}
            {formPassword}
            {quizTitleElem}
            {subtitleElem}
            {quizDescElem}
            {startBtn}
            {questionsElem}
            {finalCalcElem}
            {finishBtn}
        </Wrapper>
    );
}

QuizDetails.PropTypes = {
    data: PropTypes.object.isRequired,
    toNextStep: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired
};

export default QuizDetails;