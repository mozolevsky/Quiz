import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = (props) => {
    const {buttonData, toNextStep, disabled} = props;

    return (
        <button
            type="submit"
            className={`button button_${buttonData.style}`}
            onClick={toNextStep}
            disabled={disabled}
        >{buttonData.text}</button>
    );
}

Button.propTypes = {
    buttonData: PropTypes.shape({
        text: PropTypes.string,
        style: PropTypes.string
    }),
    toNextStep: PropTypes.func,
    style: PropTypes.object
};

export default Button;