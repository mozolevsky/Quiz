import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

class QuizDescription extends Component {
    render() {
        const {questionDesc, visible} = this.props;
        let status = visible ? 'block' : 'none';

        return (
            <p className="quiz__description" style={{display: status}}>{questionDesc}</p>
        );
    }
}

QuizDescription.PropTypes = {
    questionDesc: PropTypes.string,
    visible: PropTypes.bool
};

export default QuizDescription;