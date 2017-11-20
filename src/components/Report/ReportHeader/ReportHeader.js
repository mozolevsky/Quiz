import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../../img/logo.svg';
import logoMobile from '../../../img/logo-mobile.svg';
import './ReportHeader.css';

class ReportHeader extends Component {
    render() {
        return (
            <section className="report-header">
                <a href="/" className="report-header__link">
                    <picture>
                        <source media="(max-width: 767px)" srcSet={logoMobile}/>
                        <source media="(min-width: 768px)" srcSet={logo}/>
                        <img className="report-header__logo" src={logo} alt="logo"/>
                    </picture>
                </a>
                
                <Menu
                 right
                 pageWrapId={"page-wrap"} 
                 outerContainerId={ "outer-container" }
                 width={280}
                 >
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </section>
        );
    }
}

export default ReportHeader;