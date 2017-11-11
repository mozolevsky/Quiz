import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../../img/logo.svg';
import './ReportHeader.css';

class ReportHeader extends Component {
    render() {
        return (
            <section className="report-header">
                <a href="/" className="report-header__link">
                    <img src={logo} alt="" className="report-header__logo"/>
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