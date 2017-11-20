import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import TabsToAccordion from '../Shared/TabsToAccordion/TabsToAccordion';



const permittedFoods = [
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
        return (
           <div>
                <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Diet</h1>
                <p>Vata is one of the doshas that really does not do well on a high raw diet due to the coldness 
                    of the energy. They are one of the doshas that benefits from clean sources of animal products, 
                    because they need the grounded, dense, earthy, unctuous quality they provide to counteract 
                    the dry, brittle, and coldness in their nature. </p>
                <p>Focus on sweet, salty, and sour flavors. Now, choosing sweet does not mean having a 
                    free-for-all with overt sugars: complex-carbohydrates and healthy fats will work with 
                    you to help calm your mind. Choose warm over cold, and moist or unctuous instead of dry 
                    and plain: seek out cooked grains with a swirl of ghee or olive oil, soups, warming herbs, 
                    and stewed fruits. Make sure you drink plenty of water, warm is best. It’s important for 
                    your digestion and energy to stay hydrated, and well lubricated. As Vata dominates in the 
                    Winter, be particularly mindful about staying balanced during the cold, dry months of 
                    the year.</p>

                <TabsToAccordion 
                    type="purple" 
                    food={permittedFoods}
                    title="Good to Eat"
                />

                <TabsToAccordion 
                    type="pink" 
                    food={prohibitedFoods}
                    title="Better to Avoid"
                />

                <p>Cook your foods for the best digestion. Keep the “raw” to fresh sweet, heavy fruits, pickles and condiments.</p>
                <ContinueBtn link="/report/exercise" txt="Recommended Exercises"/>
           </div>
        );
    }
}

export default FoodsAndDiet;