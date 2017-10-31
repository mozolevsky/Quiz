import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Questions.css';


class Questions extends Component {
    constructor(props) {
        super(props);
        this.switchStep = this.switchStep.bind(this);
    }

    switchStep(answerType, e) {
        e.currentTarget.classList.add("blink", "blink-3", "blink-furiously");

        setTimeout(() => {
            this.props.toNextStep(answerType);
        }, 1000);
    }

    render() {
        const {stepQuestions, toNextStep} = this.props;

        if (stepQuestions) {
            const questionsList = stepQuestions.map((item, i) => {
                return (
                    <div className="questions__question" key={i} onClick={(e) => this.switchStep(item.label, e)}>
                        <div className="questions__variant">{item.label}</div>
                        <p className="questions__text">
                            {item.title  && <b>{item.title}</b>}
                            {item.title  && <br/>}
                            {item.text}</p>
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
