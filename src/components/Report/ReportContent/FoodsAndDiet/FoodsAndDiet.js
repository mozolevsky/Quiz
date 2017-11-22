import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import TabsToAccordion from '../Shared/TabsToAccordion/TabsToAccordion';



const prohibitedFoods = [
    {
        title: 'Vegetables',
        food: ['All bitter greens', 'cabbage', 'cauliflower', 'Brussels sprouts', 'sweet-corn', 'swede', 'radish', 'green beans', 'leeks', 'lettuce', 'peas', 'potatoes', 'cooked tomato', 'mushrooms ', 'car-rots', 'celery', 'broccoli', 'garlic', 'bok choy', 'onions', 'green/red peppers', 'beetroot', 'kale ', 'watercress', 'turnips']
    },
    {
        title: 'Fruits',
        food: ['Some fruits']
    },
    {
        title: 'Legumes',
        food: ['Some Legumes']
    },
    {
        title: 'Grains',
        food: ['Some graints']
    },
    {
        title: 'Meat',
        food: ['Some meat']
    },
    {
        title: 'Dairy',
        food: ['Some dairy']
    }
];

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
                    source={topImg.source} 
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