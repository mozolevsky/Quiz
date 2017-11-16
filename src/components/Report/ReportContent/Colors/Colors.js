import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

class Colors extends Component {
    render() {
        return (
           <div>
                 <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Colors</h1>
                <p>As we live in a sensual world, we are affected by everything we see, smell, hear, taste and touch.  Everything we experience through our five senses carries an energy and sensation with it that transcends its objectivity. When it comes to what we see in our environment, the colors we surround ourselves with, or even wear, can have profound effects. So, we want you to think about it: are you choosing colors that uplift your dosha?</p>

                <p>Kapha is most pacified by warm, dynamic colors that can bring heat and promote movement, vitality and a sense of vigor to your cooler, wetter, sluggish, tendencies. As you tend to run cooler and thicker in the body and calm mind, you need some sunny activity to burn through the fog. We want you to think about… well, avoiding white in general; try to stick with enlivening colors, because kapha secretions in the body tend to be white and cool. Go for red, crimson, oranges, and in general, bright, fiery colors.</p>

                <ContinueBtn link="/report/mantras" txt="Recommended Mantras"/>
           </div>
        );
    }
}

export default Colors;

