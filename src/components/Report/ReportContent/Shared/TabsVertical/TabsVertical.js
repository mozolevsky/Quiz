import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import PropTypes from 'prop-types';

import './TabsVertical.css';

class TabsVertical extends Component {

    render() {
        const {type} = this.props || 'purple';
        const {data} = this.props;

        const tabTitles = data.map((category, i) => {
            return <Tab key={i} className="vertical-tabs__title">{category.title}</Tab>
        });
        

        const tabsAreas = data.map((category, i) => {
            let foodsItems = category.food.map((foodItem, i) => {
                return <p key={i} className={`vertical-tabs__content vertical-tabs__content_${this.props.type}`}>{foodItem}</p>
            })

            return (
                <TabPanel key={i} className="vertical-tabs__tab-panel">
                    {foodsItems}
                </TabPanel>
            )
        });

        return (
            <Tabs className={`vertical-tabs vertical-tabs_${type}`}>
                <TabList className="vertical-tabs__titles-area">
                    {tabTitles}
                </TabList>
            
                {tabsAreas}               
            </Tabs>
        )
    }
}

export default TabsVertical;
