import React from 'react';
import './Header.css';
import logo from '../../../img/logo.svg';
import logoMobile from '../../../img/logo-mobile.svg';
import one from '../../../img/one.svg';
import takeTheQuiz from '../../../img/take-the-quiz.svg';
import stepArrow from '../../../img/step-arrow.svg';
import viewReport from '../../../img/view-report.svg';


const Header = () => {
    return (
        <header className="header">
            <a href="/" className="header__logo">
                <picture>
                    <source media="(max-width: 767px)" srcSet={logoMobile}/>
                    <source media="(min-width: 768px)" srcSet={logo}/>
                    <img className="header__img" src={logo} alt="logo"/>
                </picture>
            </a>
            <div className="breadcrumbs">
                <div className="breadcrumbs__one">
                    <img src={one} alt=""/>
                </div>
                <img src={takeTheQuiz} alt="" className="breadcrumbs__first-step"/>
                <img src={stepArrow} alt="" className="breadcrumbs__arrow"/>
                <img src={viewReport} alt="" className="breadcrumbs__second-step"/>
            </div>   
        </header>
    );
}

export default Header;