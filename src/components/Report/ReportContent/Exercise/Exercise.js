import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import ColumnList from '../Shared/ColumnList/ColumnList';

const typesOfExercises = [
    "Aerobics",
    "Ashtanga Yoga",
    "Belly dancing",
    "Dancing",
    "Power ",
    "Walking",
    "Running",
    "Rowing ",
    "Soccer",
    "Zumba",
];

class Exercise extends Component {
    render() {
        return (
           <div>
                  <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Exercise</h1>
                <p>Kaphas hate to exercise regularly and yet they are the most in need of it to overcome sluggishness and laziness in the mind and body. While you are prone to being sedentary, taking it easy, and going with flow: now is the time for you to jump and get active. This is the number one way to balance kapha’s lymph-y tendencies and the fact that it’s far too easy for you to gain unwanted pounds. You’re not doomed to any fate except that which you’re not wiling to work for. Your biggest lesson is to learn how to match your input with your output.</p>

                <p>You need that increase for your metabolic rate, and muscles burn more calories, even when you come to a standstill. Your insulin works better. Your glucose transference in and out of your muscles and cells becomes more efficient. Everything in your body works better when you move. The more sedentary you become, the more prone you are to insulin issues, diabetes, and even cancer.</p>

                <p>Don’t rely on counting calories to keep you slim, instead look at food as fuel for your activities: and then use them to push your movements into more challenging arenas. You have wonderful endurance! Find ways you really love to move your body. 30 minutes to  an hour everyday of strenuous, dynamic movement is all you need. And get up early to do it.</p>

                <ColumnList type="purple" list={typesOfExercises} style={{marginBottom: 56}}/>

                <ContinueBtn link="/report/herbs" txt="Recommended Herbs"/>
           </div>
        );
    }
}

export default Exercise;