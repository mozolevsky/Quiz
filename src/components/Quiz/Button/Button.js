import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';


class Button extends Component {
    render() {
        const {buttonName, visible} = this.props;
        let status = visible ? 'block' : 'none';

        return (
            <button
                type="submit"
                className="button button_arrow"
                style={{display: status}}
            >{buttonName}</button>
        );
    }
}

Button.PropTypes = {
    buttonName: PropTypes.string,
    visible: PropTypes.bool
};

export default Button;