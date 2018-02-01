import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.css';


class LoginForm extends Component {
    state = {
        name: '',
        email: '',
        errorEmail: false,
        errorName: false,
        isBtnActive: false
    };

    componentDidMount = () => {
        this.nameInput.focus();
    };

 
    formIsValid = () => {
        return !this.state.errorEmail && this.state.name && this.state.email;
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'email') {
            const status = !this.validateEmail(e.target.value);
            this.setState({errorEmail: status});
        }

        if (e.target.name === 'name') {
            this.setState({errorName: !this.state.name});
        }

        setTimeout(() => {
            if (this.formIsValid()) {
                this.setState({isBtnActive: true});
            } else {
                this.setState({isBtnActive: false});
            }
        }, 100);
    };

    validateEmail = (email) => {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dataFromForm(this.state.name, this.state.email);
        this.props.toNextStep();
    }

    render() {
        const {formData} = this.props;
        const {name, email, errorEmail, errorName, isBtnActive} = this.state;

        return (
            <div className="form">
                <h1 className="form__title">{formData.formTitle}</h1>
                <p className="form__desc">Start by entering your name and email below.</p>
                <form action="" className="form__wrapper">
                   <div className="form__input-area">
                       <label htmlFor="name" className="form__label">First name</label>
                       <input
                           type="text"
                           id="name"
                           name="name"
                           className={'form__input' + (errorName ? ' input-error' : '')}
                           placeholder="e.g. John"
                           ref={(name) => { this.nameInput = name; }}
                           value={name}
                           onChange={this.handleChange}
                       />
                   </div>
                    <div className="form__input-area">
                        <label htmlFor="email" className="form__label">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className={'form__input' + (errorEmail ? ' input-error' : '')}
                            placeholder="your@email.com"
                            value={email}
                            onChange={this.handleChange}
                            onBlur={this.handleChange}
                        />
                    </div>
                    <Button
                        toNextStep={this.handleSubmit} 
                        buttonData={formData.button} 
                        disabled={!isBtnActive}
                    />
                </form>
                <p className="form__additional">Already have an account? <a href="/" className="form__additional-link">Sign in now</a>
                </p>
            </div>
        )
    }

}

LoginForm.propTypes = {
    formData: PropTypes.shape({
        formTitle: PropTypes.string,
        isLogin: PropTypes.bool.isRequired,
        button: PropTypes.object.isRequired
    }),
    answers: PropTypes.array.isRequired
};

export default LoginForm;