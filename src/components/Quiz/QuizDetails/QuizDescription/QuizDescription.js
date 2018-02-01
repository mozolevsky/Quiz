import React from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

const QuizDescription = (props) => <p className="quiz__description">{props.stepDesc}</p>

QuizDescription.propTypes = {
    stepDesc: PropTypes.string
};

export default QuizDescription;