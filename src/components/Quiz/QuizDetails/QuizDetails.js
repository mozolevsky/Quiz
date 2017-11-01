import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import Questions from './Questions/Questions';
import FinalCalculationsBar from './FinalCalculationsBar/FinalCalculationsBar';

class QuizDetails extends Component {
    render() {
        const {data, toNextStep} = this.props;

        return (
            <div>
                <QuizTitle stepTitle={data.title} stepBigTitle={data.bigTitle}/>
                <QuizDescription stepDesc={data.desc}/>
                <Button
                    buttonData={data.button}
                    toNextStep={toNextStep}
                />
                <Questions
                    stepQuestions={data.questions}
                    toNextStep={toNextStep}
                />
                <FinalCalculationsBar
                    toCalculate={data.calculations}
                    toNextStep={toNextStep}
                />
            </div>
        );
    }
}

QuizDetails.PropTypes = {
    data: PropTypes.obj,
    toNextStep: PropTypes.func
};

export default QuizDetails;