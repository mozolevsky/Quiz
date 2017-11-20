import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './SideBar.css';

class SideBar extends Component {
    render() {
        const {pagesData} = this.props;

        let linksForPages = pagesData.map((item, i) => {
            return (
                <NavLink 
                    to={`/report/${item.link}`} 
                    key={i} 
                    className="side-bar__page-link"
                    activeClassName="side-bar__page-link_active"
                    >
                        {item.name}
                </NavLink>
            )
        });

        return (
            <div className="side-bar">
                <div className="side-bar__fixed-area">
                    <div className="side-bar__user-block">
                        <div className="side-bar__user-type">V</div>
                        <p className="side-bar__user-name">Johanson</p>
                    </div>

                    <div className="side-bar__pages-area">
                        <p className="side-bar__pages-title">Your Dosha</p>
                        <div className="side-bar__pages-list">
                             {linksForPages}
                        </div>
                        <div className="side-bar__extra-links">
                            <div className="side-bar__extra-link-area">
                                <NavLink to={`/report/meal-plans`} className="side-bar__extra-link">Meal Plans</NavLink>
                                <span className="side-bar__extra-label">New</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SideBar.propTypes = {
    pagesData: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })).isRequired
};

export default SideBar;
