import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SideBar from './SideBar/SideBar';
import ReportHeader from './ReportHeader/ReportHeader';
import ReportContent from './ReportContent/ReportContent';
import ReportFooter from './ReportFooter/ReportFooter';
import './Report.css';

// temp data
const reportPages = [
    {
        name: "Overview",
        link: "overview"
    },
    {
        name: "Foods and Diet",
        link: "foods-and-diet"
    },
    {
        name: "Exercise",
        link: "exercise"
    },
    {
        name: "Herbs",
        link: "herbs"
    },
    {
        name: "Spices",
        link: "spices"
    },
    {
        name: "Aromatherapy",
        link: "aromatherapy"
    },
    {
        name: "Massage",
        link: "massage"
    },
    {
        name: "Yoga",
        link: "yoga"
    },
    {
        name: "Colors",
        link: "colors"
    },
    {
        name: "Mantras",
        link: "mantras"
    },
    {
        name: "Gems",
        link: "gems"
    }
];



class Report extends Component {
    render() {
        const {match} = this.props;

        return (
            <div className="report-container" id="outer-container">
                <section className="report-container__menu-area">
                    <SideBar pagesData={reportPages}/>
                </section>
                <section className="report-container__content-area">
                    <ReportHeader/>
                    <div id="page-wrap" style={{flex: 1}}>
                        <div className="report-container__content-main">
                            <ReportContent match={match} pagesData={reportPages}/>
                        </div>
                    </div>
                    <ReportFooter/>
                </section>
            </div>
        );
    }
}

export default Report;