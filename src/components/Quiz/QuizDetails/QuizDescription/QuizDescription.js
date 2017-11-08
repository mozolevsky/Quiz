import React from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

const QuizDescription = (props) => {
    const {stepDesc} = props;

    return (
        <div>
            {stepDesc && <p className="quiz__description">{stepDesc}</p>}
        </div>
    );
}

QuizDescription.PropTypes = {
    stepDesc: PropTypes.string
};

export default QuizDescription;