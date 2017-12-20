import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.css';


class PasswordForm extends Component {
    state = {
        password: '',
        terms: false,
        errorPassword: false
    };

    componentDidMount = () => {
        this.passwordInput.focus();
    };

    formIsValid = () => {
        return !this.state.errorPassword && this.state.password && this.state.terms;
    }

    handleChange = (e) => {
       if (e.target.name === 'password') {
            this.setState({
                errorPassword: !this.state.password,
                password: e.target.value
            });
        }

        if (e.target.name === 'terms') {
            this.setState({
                terms: !this.state.terms
            });
        }

        setTimeout(() => {
            if (this.formIsValid()) {
                this.setState({isBtnActive: true});
            } else {
                this.setState({isBtnActive: false});
            }
        }, 100);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.toNextStep();
    }

    render() {
        const {formData} = this.props;
        const {password, errorPassword, isBtnActive, terms} = this.state;

        return (
            <div className="form">
                <h1 className="form__title">{formData.formTitle}</h1>
                <p className="form__desc">Set a password for signing in to Yoganosh and accessing your report.</p>
                <form action="" className="form__wrapper">
                   <div className="form__input-area">
                       <label htmlFor="name" className="form__label">Password</label>
                       <input
                           type="text"
                           id="password"
                           name="password"
                           className={'form__input' + (errorPassword ? ' input-error' : '')}
                           placeholder="Set a password…"
                           ref={(password) => { this.passwordInput = password; }}
                           value={password}
                           onChange={this.handleChange}
                       />
                   </div>
                  <div className="form__input-area">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className='form__input form__input_checkbox'
                            checked={terms}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="terms" className="form__label form__label_checkbox">
                        I accept the <a href="/">Terms of Service</a>.
                        </label>
                  </div>
                    <Button
                        toNextStep={this.handleSubmit} 
                        buttonData={formData.button} 
                        disabled={!isBtnActive}
                    />
                </form>
            </div>
        )
    }

}

PasswordForm.PropTypes = {
    formData: PropTypes.shape({
        formTitle: PropTypes.string,
        isPassword: PropTypes.bool.isRequired,
        button: PropTypes.object.isRequired
    }),
    answers: PropTypes.array.isRequired
};

export default PasswordForm;