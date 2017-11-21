import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import CollapseList from '../Shared/Collapse/CollapseList';


const aromaCollapsData = [
    {
        title: 'Brahmi',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Manjistha',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Trikatu',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Ashwaganda',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Triphala',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Guggulu',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    },
    {
        title: 'Turmeric',
        text: 'This is a known adaptogenic tonic, and works to rebuild the body and nervous system when its been depleted by stress. It is a revitalizer, uplifts energy levels naturally, and promotes a nourishing effect for the reproductive systems of both the male and female bodies.'
    }
]

class Aromatherapy extends Component {
    render() {
        return (
           <div>
                 <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                />
                <h1 className="title">Vata and Aromatherapy</h1>
                <p>The Ayurvedic view of any illness or disease is due to a weakness or aggravation in your body that’s gotten out of control, or become concentrated. We all tend to “whack ourselves out” in particular ways, but how and where it expresses itself is how the ancient physicians knew what was needed to restore balance. </p>
                <p>These are a few of our herbal tonic suggestions to upright your mind-body complex. Note: always choose whole herbs over tinctures; they are better designed to help support your body’s natural functioning and healing. </p>

                <CollapseList data={aromaCollapsData}/>

                <ContinueBtn link="/report/massage" txt="Recommended Massages"/>
           </div>
        );
    }
}

export default Aromatherapy;
