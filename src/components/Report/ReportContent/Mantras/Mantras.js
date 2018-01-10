import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import Quote from '../Shared/Quote/Quote';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';

class Mantras extends Component {
    render() {
        const {
            titles,
            texts,
            topImg,
            quotes
        } = this.props.pageData.content;

        return (
           <div>
                <TopImg 
                    source={'/static/images/' + topImg.source} 
                    desc={topImg.desc}
                    offset={topImg.offset}
                />

                <h1 className="title">{titles[0]}</h1>

                <p>{texts[0]}</p>
                <p>{texts[1]}</p>
                <p>{texts[2]}</p>

                <Quote txt={quotes} short={true}/>

                <p>{texts[3]}</p>

                <ContinueBtn link="/report/gems" txt="Recommended Gems"/>
           </div>
        );
    }
}

export default Mantras;
