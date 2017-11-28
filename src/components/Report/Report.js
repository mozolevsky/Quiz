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

    getTypesPersentages = (url) => {
        if (url.includes("percentages=")) {
            return url.match(/[0-9]{1,3}-[0-9]{1,3}-[0-9]{1,3}/)[0].split("-");
        }
    }

    componentDidMount() {
        const url = this.props.location.pathname;
        const contentType = this.getContentType(url);

        console.log(this.getTypesPersentages(url));

        this.setState({
            reportData: reportData[contentType] || reportData.vatta,
            vatta: this.getTypesPersentages(url)[0],
            pitta: this.getTypesPersentages(url)[1],
            kapha: this.getTypesPersentages(url)[2]
        });
   }

    render() {
        const {
            mobileNavTitle, 
            reportData,
            vatta,
            pitta,
            kapha
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