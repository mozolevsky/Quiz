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

// const contentLink = "/report/type=vatta-pitta-kapha&name=adam";

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

    getContentType = (str) => {
        if (str.includes("/report/type=")) {
            let startChar = str.indexOf('=') + 1;
            let lastChar = str.indexOf('&');

            return str.substring(startChar, lastChar);
        }
    }

    componentDidMount() {
        let contentType = this.getContentType(this.props.location.pathname);
        this.setState({
            reportData: reportData[contentType] || reportData.vatta
        });
   }

    render() {
        const {mobileNavTitle, reportData} = this.state;

        return (
            <div className="report-container" id="outer-container">
                <section className="report-container__menu-area">
                    <SideBar pagesData={reportData}/>
                </section>
                <section className="report-container__content-area">
                    <ReportHeader/>
                    <div id="page-wrap" style={{flex: 1}}>
                        <div className="report-container__content-main">
                            <div className="report-container__mobile-nav">
                            <Collapse>
                                <Panel header={mobileNavTitle}>
                                <NavLinkList pagesData={reportData} getTitle={this.setMobileNavTitle}/>
                            </Panel>
                            </Collapse>
                            </div>

                            <ReportContent pagesData={reportData}/>
                        </div>
                    </div>

                    <div className="report-container__mobile-links"> 
                        <NavLinkList pagesData={reportData}/>
                    </div>

                    <ReportFooter/>
                </section>
            </div>
        );
    }
}

export default Report;