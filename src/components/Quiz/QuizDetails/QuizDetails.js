import React from 'react';
import PropTypes from 'prop-types';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import Questions from './Questions/Questions';
import FinalCalculationsBar from './FinalCalculationsBar/FinalCalculationsBar';
import Form from './Form/Form';

const QuizDetails = (props) => {
    const {data, toNextStep, answers} = props;

    return (
        <div>
            {data.title && <QuizTitle stepTitle={data.title} stepBigTitle={data.bigTitle}/>}
            <QuizDescription stepDesc={data.desc}/>
            {
                data.button && data.button.type === 'start' &&
                <Button buttonData={data.button} toNextStep={toNextStep} />
            }
            <Questions
                stepQuestions={data.questions}
                toNextStep={toNextStep}
            />
            {data.calculations && <FinalCalculationsBar toNextStep={toNextStep}/>}
            {data.isForm && <Form formData={data} answers={answers}/>}
        </div>
    );
}

QuizDetails.PropTypes = {
    data: PropTypes.object.isRequired,
    toNextStep: PropTypes.func.isRequired,
    answers: PropTypes.array.isRequired
};

export default QuizDetails;