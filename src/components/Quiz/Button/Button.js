import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';


class Button extends Component {
    render() {
        const {buttonName} = this.props;
        return (
            <button type="submit" className="button button_arrow">{buttonName}</button>
        );
    }
}

Button.PropTypes = {
    buttonName: PropTypes.string
};

export default Button;