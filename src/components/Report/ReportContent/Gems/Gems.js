import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';


class Gems extends Component {
    render() {
        return (
           <div>
                <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Gems</h1>
                <p>The Ayurvedic view of any illness or disease is due to a weakness or aggravation in your body that’s gotten out of control, or become concentrated. We all tend to “whack ourselves out” in particular ways, but how and where it expresses itself is how the ancient physicians knew what was needed to restore balance.</p>
                <p>These are a few of our herbal tonic suggestions to upright your mind-body complex. Note: always choose whole herbs over tinctures; they are better designed to help support your body’s natural functioning and healing.</p>

                <ContinueBtn link="/report" title="Back to" txt="Recommended Yoga"/>
           </div>
        );
    }
}

export default Gems;
