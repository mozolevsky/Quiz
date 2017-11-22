import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './NavLinkList.css';

const NavLinkList = (props) => {
    return (
        <div className="nav-link-list">
            {
                props.pagesData.map((item, i) => {
                    return (
                        <NavLink
                            key={i} 
                            to={`/report/${item.link}`} 
                            className="nav-link-list__link"
                            onClick={props.getTitle}
                        >{item.name}</NavLink>
                    )
                })
            }
        </div>
    )
}

NavLinkList.propTypes = {
    pagesData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }))
}

export default NavLinkList;