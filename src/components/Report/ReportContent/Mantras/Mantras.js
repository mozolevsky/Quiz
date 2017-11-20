import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import Quote from '../Shared/Quote/Quote';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

const mantrasQuote = `Asato ma sadgamaya; 
Tamaso ma jyotir gamaya; 
Mrtyorma amritam gamaya
AUM, shanti, Shanti, Shanti

(Lead me from unreal to the real; 
Lead me from darkness into light; 
Lead me from death to immortality. 
Om, peace, peace, peace)`

class Mantras extends Component {
    render() {
        return (
           <div>
                 <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata Mantras</h1>
                <p> In the Vedic philosophy, creation is dependent on light and sound, thus a mantra is a word, phrase, or sound root  that is used to create a certain vibration within your physiology. By using these spiritual roots, phrases, and sounds, you invite the mind to operate in a deeper, subtler way. It can be life changing as a regular practice.</p>

                <p>As a Kapha, you already benefit from a calmer, serene quality to your mind; but if you’re unbalanced, you may trend towards depression and possessiveness. In this case, you need regular opportunities cultivate joy and energy. So we want to recommend a mantra that not only uplifts, but purifies and cleanses the psychophysiology. </p>

                <p>One of the very best prayers and phrases for you to contemplate is as follows:</p>

                <Quote txt={mantrasQuote} short={true}/>

                <p>Another one is So-Hum (inhale on so, exhale on hum).</p>

                <ContinueBtn link="/report/gems" txt="Recommended Gems"/>
           </div>
        );
    }
}

export default Mantras;
