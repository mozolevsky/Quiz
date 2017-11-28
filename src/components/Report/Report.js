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

class Report extends Component {
    state = {
        mobileNavTitle: 'Overview',
        reportData: reportData.vatta,
        vatta: 0,
        pitta: 0, 
        kapha: 0
    }

    setMobileNavTitle = (e) => {
        this.setState({
            mobileNavTitle: e.target.innerText
        });
    }

    getContentType = (url) => {
        if (url.includes("/report/type=")) {
            let startChar = url.indexOf('=') + 1;
            let lastChar = url.indexOf('&');

            return url.substring(startChar, lastChar);
        }
    }

    getParameterByName = (url, name) => {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    getTypesPersentages = (url) => {
        if (url.includes("percentages=")) {
            return url.match(/[0-9]{1,3}-[0-9]{1,3}-[0-9]{1,3}/)[0].split("-");
        }
    }

    componentDidMount() {
        const url = this.props.location.pathname;
        const contentType = this.getContentType(url);
        this.setState({
            reportData: reportData[contentType] || reportData.vatta,
            vatta: this.getTypesPersentages(url)[0],
            pitta: this.getTypesPersentages(url)[1],
            kapha: this.getTypesPersentages(url)[2],
            name: this.getParameterByName(url, "name"),
            type: contentType
        });
   }

    render() {
        const {
            mobileNavTitle, 
            reportData,
            vatta,
            pitta,
            kapha,
            name,
            type
        } = this.state;
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

                            <ReportContent 
                                pagesData={reportData}
                                vatta={vatta}
                                pitta={pitta}
                                kapha={kapha}
                                name={name}
                                type={type}
                            />
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