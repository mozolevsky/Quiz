import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.css';



class Form extends Component {
    componentDidMount() {
        this.nameInput.focus();
        this.props.calcYogaType();
    }

    render() {
        const {formData} = this.props;

        return (
            <div className="form">
                <h1 className="form__title">{formData.formTitle}</h1>
                <p className="form__desc">Enter your name and email to continue:</p>
                <form action="" className="form__wrapper">
                   <div className="form__input-area form__input-area_arrow">
                       <label htmlFor="name" className="form__label">First name</label>
                       <input
                           type="text"
                           id="name"
                           className="form__input"
                           placeholder="your first name"
                           ref={(name) => { this.nameInput = name; }}
                       />
                   </div>
                    <div className="form__input-area">
                        <label htmlFor="name" className="form__label">Email</label>
                        <input type="text" id="name" className="form__input" placeholder="kellysanders@gmail.com"/>
                    </div>
                    <Button buttonData={formData.button} />
                </form>
            </div>
        )
    }

}

Form.PropTypes = {
    stepQuestions: PropTypes.shape({
        formTitle: PropTypes.string,
        isForm: PropTypes.bool.isRequired,
        button: PropTypes.obj
    })
};

export default Form;