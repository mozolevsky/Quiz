import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TabsVertical from '../TabsVertical/TabsVertical';
import Accordion from '../Accordion/Accordion';
import IconTitle from '../IconTitle/IconTitle';

import './TabsToAccordion.css';

import tick from '../../../../../img/tick-white.svg';
import cross from '../../../../../img/cross-white.svg';

class TabsToAccordion extends Component {
    state = {
        isMobile: false
    }

    resize = () => {
        this.setState({
            isMobile: window.innerWidth < 768
        });
    }

    componentDidMount() {
        window.addEventListener('resize', () => this.resize());
        this.resize();
    }

    render() {
        const {isMobile} = this.state;
        const {title, food, type} = this.props;
        
        let output = null;
        if (isMobile) {
            output = <Accordion data={food} type={type}/>
        } else {
            output = <TabsVertical data={food} type={type}/>
        }

        let iconForTitle = null;
        if (type === "purple") {
            iconForTitle = tick;
        }

        if (type === "pink") {
            iconForTitle = cross;
        }

        return (
            <div className={`tabs-accordion tabs-accordion_${type}`}>
                <IconTitle 
                    src={iconForTitle}
                    type={type}
                    title={title}
                />
                {output}
            </div>
        )
    }
}

TabsToAccordion.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    food: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        food: PropTypes.array.isRequired
    }))
}

export default TabsToAccordion;