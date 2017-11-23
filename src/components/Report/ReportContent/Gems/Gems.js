import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';


class Gems extends Component {
    render() {
        const {
            titles,
            texts,
            topImg
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

                <ContinueBtn link="/report" title="Back to" txt="Recommended Yoga"/>
           </div>
        );
    }
}

export default Gems;
