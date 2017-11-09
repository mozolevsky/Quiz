import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './SideBar.css';

class SideBar extends Component {
    render() {
        const {links} = this.props;

        let linksForPages = links.map((item, i) => {
            return (
                <a href={item.link} key={i} className="side-bar__page-link">{item.name}</a>
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
                                <a href="/" className="side-bar__extra-link">Meal Plans</a>
                                <span className="side-bar__extra-label">New</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;
