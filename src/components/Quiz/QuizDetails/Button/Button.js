import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';


class Button extends Component {
    render() {
        const {buttonData, toNextStep} = this.props;

        return (
            <button
                type="submit"
                className={`button button_${buttonData.style}`}
                onClick={toNextStep}
            >{buttonData.text}</button>
        );
    }
}

Button.PropTypes = {
    buttonData: PropTypes.shape({
        text: PropTypes.string,
        style: PropTypes.string
    }),
    toNextStep: PropTypes.func
};

export default Button;