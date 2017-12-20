import React from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';


const QuizTitle = (props) => {
    const {stepTitle} = props;

    return (
        <h1 className="quiz__title">
            {stepTitle}
        </h1>
    );
}

QuizTitle.PropTypes = {
    stepTitle: PropTypes.string,
    stepBigTitle: PropTypes.string
};


export default QuizTitle;