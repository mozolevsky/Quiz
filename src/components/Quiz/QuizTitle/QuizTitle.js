import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';


class QuizTitle extends Component {
    render() {
        const {questionName} = this.props;

        return (
            <h1 className="quiz__title">{questionName}</h1>
        );
    }
}

QuizTitle.PropTypes = {
    questionName: PropTypes.string
};


export default QuizTitle;