import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SideBar from './SideBar/SideBar';
import ReportHeader from './ReportHeader/ReportHeader';
import './Report.css';

// temp data
const linksArray = [
    {
        name: "Overview",
        link: "#"
    },
    {
        name: "Foods and Diet",
        link: "#"
    },
    {
        name: "Exercise",
        link: "#"
    },
    {
        name: "Herbs",
        link: "#"
    },
    {
        name: "Spices",
        link: "#"
    },
    {
        name: "Aromatherapy",
        link: "#"
    },
    {
        name: "Massage",
        link: "#"
    },
    {
        name: "Yoga",
        link: "#"
    },
    {
        name: "Colors",
        link: "#"
    },
    {
        name: "Mantras",
        link: "#"
    },
    {
        name: "Gems",
        link: "#"
    }
];

class Report extends Component {
    render() {
        return (
            <div className="report-container" id="outer-container">
                <section className="report-container__menu-area">
                    <SideBar links={linksArray} />
                </section>
                <section className="report-container__content-area">
                    <ReportHeader/>
                    <div id="page-wrap">
                        Text'll be here
                    </div>
                </section>
            </div>
        );
    }
}

export default Report;