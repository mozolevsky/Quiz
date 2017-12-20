import React from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

const QuizDescription = (props) => <p className="quiz__description">{props.stepDesc}</p>

QuizDescription.PropTypes = {
    stepDesc: PropTypes.string
};

export default QuizDescription;