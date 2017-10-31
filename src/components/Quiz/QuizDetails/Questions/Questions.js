import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Questions.css';


class Questions extends Component {
    render() {
        const {stepQuestions, toNextStep} = this.props;

        if (stepQuestions) {
            const questionsList = stepQuestions.map( (item, i) => {
                return (
                    <div className="questions__question" key={i}>
                        <div className="questions__variant">{item.label}</div>
                        <p className="questions__text">{item.text}</p>
                    </div>
                )
            });

            return (
                <div className="questions">
                    {questionsList}
                    <button
                        className="questions__skip-link"
                        type="button"
                        onClick={toNextStep}
                    >Skip</button>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

Questions.PropTypes = {
    stepQuestions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        title: PropTypes.number,
        text: PropTypes.string.isRequired,
    })).isRequired
};

export default Questions;
