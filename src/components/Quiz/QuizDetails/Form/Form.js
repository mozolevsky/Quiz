import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Form.css';



class Form extends Component {
    state = {
        name: '',
        email: '',
        errorEmail: false,
        errorName: false
    };

    componentDidMount = () => {
        this.nameInput.focus();
        this.calculateYogaType();
    };

    calculateYogaType = () => {
        const {answers} = this.props;
        let typesData = {
            A: {
                name: 'vatta',
                count: 0,
                percentage: 0
            },
            B: {
                name: 'pitta',
                count: 0,
                percentage: 0
            },
            C: {
                name: 'kapha',
                count: 0,
                percentage: 0
            }
        };

        answers.forEach((answer) => {
            typesData[answer].count += 1;
            typesData[answer].percentage = Math.round(typesData[answer].count / answers.length * 100);
        });

        let typesDataArray = Object.values(typesData);
        typesDataArray.sort(function(a, b) {
            return b.percentage - a.percentage ;
        });

        let yogaType = typesDataArray[0].name;
        if (typesDataArray[0].percentage - typesDataArray[1].percentage < 5) {
            yogaType = `${typesDataArray[0].name}-${typesDataArray[1].name}`;
        }
        if (typesDataArray[1].percentage - typesDataArray[2].percentage < 5) {
            yogaType = `${typesDataArray[0].name}-${typesDataArray[1].name}-${typesDataArray[2].name}`;
        }

        this.setState({yogaType});
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'email') {
            const status = !this.validateEmail(e.target.value);
            this.setState({errorEmail: status});
        }

        if (e.target.name === 'name') {
            this.setState({errorName: !!this.state.name});
        }
    };

    handleSubmit = (e) => {
        if (!this.state.errorEmail && this.state.name && this.state.email) {
            console.log(this.state);
        }
        e.preventDefault();
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    render() {
        const {formData} = this.props;
        const {name, email, errorEmail, errorName} = this.state;

        return (
            <div className="form">
                <h1 className="form__title">{formData.formTitle}</h1>
                <p className="form__desc">Enter your name and email to continue:</p>
                <form action="" className="form__wrapper" onSubmit={this.handleSubmit}>
                   <div className="form__input-area form__input-area_arrow">
                       <label htmlFor="name" className="form__label">First name</label>
                       <input
                           type="text"
                           id="name"
                           name="name"
                           className={'form__input' + (errorName ? ' input-error' : '')}
                           placeholder="your first name"
                           ref={(name) => { this.nameInput = name; }}
                           value={name}
                           onChange={this.handleChange}
                       />
                   </div>
                    <div className="form__input-area">
                        <label htmlFor="name" className="form__label">Email</label>
                        <input
                            type="text"
                            id="name"
                            name="email"
                            className={'form__input' + (errorEmail ? ' input-error' : '')}
                            placeholder="kellysanders@gmail.com"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <Button buttonData={formData.button} />
                </form>
            </div>
        )
    }

}

Form.PropTypes = {
    formData: PropTypes.shape({
        formTitle: PropTypes.string,
        isForm: PropTypes.bool.isRequired,
        button: PropTypes.obj
    }),
    answers: PropTypes.array.isRequired
};

export default Form;