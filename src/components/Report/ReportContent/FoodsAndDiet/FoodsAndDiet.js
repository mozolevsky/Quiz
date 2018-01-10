import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import TabsToAccordion from '../Shared/TabsToAccordion/TabsToAccordion';


class FoodsAndDiet extends Component {
    render() {
        const {
            titles, 
            texts, 
            topImg, 
            tabsToAccordion, 
            tabsToAccordion2
        } = this.props.pageData.content;

        return (
           <div>
                <TopImg 
                    source={'/static/images/' + topImg.source} 
                    desc={topImg.desc}
                    offset={topImg.offset}
                />
                <h1 className="title">{titles[0]}</h1>
                <p>{texts[0]}</p>
                <p>{texts[1]}</p>

                <TabsToAccordion 
                    type={tabsToAccordion.type} 
                    food={tabsToAccordion.foods}
                    title={tabsToAccordion.title}
                />

                <TabsToAccordion 
                    type={tabsToAccordion2.type} 
                    food={tabsToAccordion2.foods}
                    title={tabsToAccordion2.title}
                />

                <p>{texts[2]}</p>
                <ContinueBtn link="/report/exercise" txt="Recommended Exercises"/>
           </div>
        );
    }
}

export default FoodsAndDiet;