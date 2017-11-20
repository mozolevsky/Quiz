import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import Quote from '../Shared/Quote/Quote';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

const massageQuote = ` “The body of one who uses oil massage regularly does not become affected much even
if subjected to accidental injuries, or strenuous work. By using oil massage daily, 
a person is endowed with pleasant touch, trimmed body parts and becomes strong, charming 
and least affected by old age.” — Charaka Samhita Vol. 1, V: 88-89`;

class Massage extends Component {
    render() {
        return (
           <div>
                <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Abhyanga</h1>
                <p>
                    We recommend making a tiny space to spend an hour each day. We know this seems
                    impossible for most people in their busy lives, but for YOU, it is essential
                    you make it a point to “recharge”. This will support you to avoid becoming 
                    overwhelmed or anxious. If you have spiritual aspirations, this will preserve
                    your vital energies.
                </p>
                <Quote txt={massageQuote} />
                <p>
                    You need time to transition, and you need time outs. Choose activities that uplift 
                    your heart: this is your key to the universe. Choose meditation. Try a restorative
                     vinyasa class instead. It’s ok to know and admit you need rest, grounding, and slowness. 
                     You tend to be go-go-go like the wind, and you need to add some earth and water and 
                     warmth into your life on a regular basis. As much as you might hate and reject it with 
                     every cell of your being: routine is very good and stabilizing for you
                </p>
                <ContinueBtn link="/report/yoga" txt="Recommended Yoga"/>
           </div>
        );
    }
}

export default Massage;
