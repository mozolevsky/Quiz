import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';


class MealPlans extends Component {
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
           </div>
        );
    }
}

export default MealPlans;
