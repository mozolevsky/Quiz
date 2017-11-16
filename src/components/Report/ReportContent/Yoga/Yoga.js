import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

class Yoga extends Component {
    render() {
        return (
           <div>
                 <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Yoga</h1>
                <p>Surya Namaskar or Sun Salutations are good for every dosha. It is a safe vinyasa flow that gently massages every organ and stretches every muscle in your body. Plus, it feels so good. Surya Namaskar is the bodily equivalent to the Gayatri mantra, a prayer to the life-giving force in the universe. </p>

                <p>If you’re new to the series, we recommend starting slow, and work your way up from 1 round to 4 daily, and pay attention to your breath as you move through the poses. It’s more important to achieve the correct poses than to rush through them. But once you get the form down, pick up your speed. You’re definitely looking to break a sweat.</p>

                <p>Kapha types need to practice Surya Namaskar in sequence and briskly, you must resist the temptation to take it slow and easy. You need the vigorous movement.</p>

                <p>Any postures that kapha engages in should pay special attention to the core, opening the chest and lungs, and upper body as this is the place where kapha tends to coagulate. Inverted postures and dynamic poses that require strength and balance stimulate the metabolic rate. Always think about carrying your heart high.</p>

                <p>A good protracted poses for Kapha is Ardha Matsyasana or Half Fishes Pose. This encourages a healthy flow of prana (life force) in the system and is especially good for those who suffer with congestion or asthma. </p>

                <ContinueBtn link="/report/colors" txt="Recommended Colors"/>
           </div>
        );
    }
}

export default Yoga;
