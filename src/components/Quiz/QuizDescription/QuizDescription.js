import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

class QuizDescription extends Component {
    render() {
        const {questionDesc} = this.props;

        return (
           <p className="quiz__description">{questionDesc}</p>
        );
    }
}

QuizDescription.PropTypes = {
    questionDesc: PropTypes.string
};

export default QuizDescription;