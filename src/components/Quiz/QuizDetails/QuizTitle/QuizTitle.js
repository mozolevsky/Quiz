import React from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';


const QuizTitle = (props) => {
    const {stepTitle, stepBigTitle} = props;

    return (
        <h1 className="quiz__title">
            {stepBigTitle && <b>{stepBigTitle}</b>}
            {stepBigTitle && <br/>}
            {stepTitle}
        </h1>
    );
}

QuizTitle.PropTypes = {
    stepTitle: PropTypes.string,
    stepBigTitle: PropTypes.string
};


export default QuizTitle;