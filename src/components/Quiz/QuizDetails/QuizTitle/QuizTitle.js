import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuizTitle.css';


class QuizTitle extends Component {
    render() {
        const {stepTitle, bigTitle} = this.props;

        return (
            <h1 className="quiz__title">
                {bigTitle && <b>bigTitle</b>}
                {bigTitle && <br/>}
                {stepTitle}
            </h1>
        );
    }
}

QuizTitle.PropTypes = {
    stepTitle: PropTypes.string
};


export default QuizTitle;