import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../../img/logo-gray.svg';
import './ReportFooter.css';


const ReportFooter = (props) => {
    console.log(logo);
    return (
        <section className="report-footer">
            <img src={logo} alt="footer logo yoganosh" className="report-footer__logo"/>
            <p className="report-footer__desc">Made with [love] in NYC. Copyright © 2014-2017 by Yoganosh. All rights reserved.</p>
        </section>
    )
}

export default ReportFooter;