import React from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';


const QuizSubtitle = (props) => {
    const {subtitle} = props;

    return (
        <p className="quiz__subtitle">
            {subtitle}
        </p>
    );
}

QuizSubtitle.PropTypes = {
    subtitle: PropTypes.string
};


export default QuizSubtitle;