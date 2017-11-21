import React from 'react';
import Collapse from './Collapse';
import PropTypes from 'prop-types';
import './Collapse.css';

const CollapseList = (props) => {
    return (
        <div className="collapse-list">
            {
                props.data.map((item, i) => {
                    return (
                        <Collapse key={i} title={item.title} text={item.text}/>
                    )
                })
            }
        </div>
    )
}

CollapseList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }))
}

export default CollapseList;