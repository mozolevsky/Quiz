import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

class Yoga extends Component {
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
                <p>{texts[2]}</p>
                <p>{texts[3]}</p>
                <p>{texts[4]}</p>

                <ContinueBtn link="/report/colors" txt="Recommended Colors"/>
           </div>
        );
    }
}

export default Yoga;
