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
        mobileHeaderStatus: true,
        reportData: reportData.vatta,
        mobileNavMenuStatus: '1',
        vatta: 0,
        pitta: 0, 
        kapha: 0
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
        
        let currentScrollY = window.scrollY;
        window.addEventListener('scroll', () => {

            let mobileHeaderStatus = window.scrollY > currentScrollY;
            currentScrollY = window.scrollY;

            this.setState({mobileHeaderStatus: !mobileHeaderStatus});
        });
   }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    setMobileNavTitle = (e) => {
        this.setState({
            mobileNavTitle: e.target.innerText
        });

        this.toggleMobileMenu();    
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

    toggleMobileMenu = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                mobileNavMenuStatus: this.state.mobileNavMenuStatus === '1' ? '0' : '1'
            } 
        });
    }

    render() {
        const {
            mobileNavTitle,
            mobileHeaderStatus,
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
                    <SideBar pagesData={reportData} name={name}/>
                </section>

                <section className="report-container__content-area">
                    <div className={`report-container__header-wrapper ${mobileHeaderStatus ? '' : 'report-container__header-inVisible'}`}>
                        <ReportHeader/>

                        <div className="report-container__mobile-nav"
                             onClick={this.toggleMobileMenu}>
                            <Collapse activeKey={this.state.mobileNavMenuStatus}>
                                <Panel header={mobileNavTitle} onClick={this.setMobileNavTitle}>
                                    <NavLinkList 
                                        pagesData={reportData} 
                                        getTitle={this.setMobileNavTitle}
                                    />
                                </Panel>        
                            </Collapse>
                        </div>
                    </div>

                    <div id="page-wrap" style={{flex: 1}}>
                        <div className="report-container__content-main">
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