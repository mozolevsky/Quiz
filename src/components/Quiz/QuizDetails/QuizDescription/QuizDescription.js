import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuizDescription.css';

class QuizDescription extends Component {
    render() {
        const {stepDesc} = this.props;

        return (
            <div>
                {stepDesc && <p className="quiz__description">{stepDesc}</p>}
            </div>
        );
    }
}

QuizDescription.PropTypes = {
    stepDesc: PropTypes.string,
    visible: PropTypes.bool
};

export default QuizDescription;