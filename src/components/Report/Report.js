import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import SideBar from './SideBar/SideBar';
import ReportHeader from './ReportHeader/ReportHeader';
import ReportContent from './ReportContent/ReportContent';
import ReportFooter from './ReportFooter/ReportFooter';
import NavLinkList from './NavLinkList/NavLinkList';
import Collapse, {Panel} from 'rc-collapse';
import './Report.css';
import reportData from '../../data/reportData.json';

// temp data
const reportPages = [
    {
        name: "Overview",
        link: ""
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
    state = {
        mobileNavTitle: 'Overview',
        reportData: reportData.vatta
    }

    setMobileNavTitle = (e) => {
        this.setState({
            mobileNavTitle: e.target.innerText
        });
    }

    componentDidMount() {
        //later here will be request to API 
        
    }

    render() {
        const {match} = this.props;
        const {mobileNavTitle, reportData} = this.state;

        return (
            <div className="report-container" id="outer-container">
                <section className="report-container__menu-area">
                    <SideBar pagesData={reportPages}/>
                </section>
                <section className="report-container__content-area">
                    <ReportHeader/>
                    <div id="page-wrap" style={{flex: 1}}>
                        <div className="report-container__content-main">
                            <div className="report-container__mobile-nav">
                            <Collapse>
                                <Panel header={mobileNavTitle}>
                                <NavLinkList pagesData={reportPages} getTitle={this.setMobileNavTitle}/>
                            </Panel>
                            </Collapse>
                            </div>

                            <ReportContent match={match} pagesData={reportData}/>
                        </div>
                    </div>

                    <div className="report-container__mobile-links"> 
                        <NavLinkList pagesData={reportPages}/>
                    </div>

                    <ReportFooter/>
                </section>
            </div>
        );
    }
}

export default Report;