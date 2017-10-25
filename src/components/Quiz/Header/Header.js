import React, { Component } from 'react';
import './Header.css';
import logo from '../../../img/logo.svg';


class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href="/" className="header__logo">
                    <img className="header__img" src={logo} alt=""/>
                </a>
            </header>
        );
    }
}

export default Header;