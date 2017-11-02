import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuizTitle from './QuizTitle/QuizTitle';
import QuizDescription from './QuizDescription/QuizDescription';
import Button from './Button/Button';
import Questions from './Questions/Questions';
import FinalCalculationsBar from './FinalCalculationsBar/FinalCalculationsBar';
import Form from './Form/Form';

class QuizDetails extends Component {
    render() {
        const {data, toNextStep} = this.props;

        return (
            <div>
                <QuizTitle stepTitle={data.title} stepBigTitle={data.bigTitle}/>
                <QuizDescription stepDesc={data.desc}/>
                {
                    data.button.type === 'start' &&
                    <Button buttonData={data.button} toNextStep={toNextStep} />
                }
                <Questions
                    stepQuestions={data.questions}
                    toNextStep={toNextStep}
                />
                {data.calculations && <FinalCalculationsBar toNextStep={toNextStep} />}
                {data.isForm && <Form formData={data}/>}
            </div>
        );
    }
}

QuizDetails.PropTypes = {
    data: PropTypes.obj,
    toNextStep: PropTypes.func
};

export default QuizDetails;