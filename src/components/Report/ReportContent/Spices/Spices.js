import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import ColumnList from '../Shared/ColumnList/ColumnList';



class Spices extends Component {
    render() {
        const {
            titles,
            texts,
            topImg,
            spicesList
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

                <ColumnList list={spicesList} type="purple" style={{marginBottom: 56}}/>

                <ContinueBtn link="/report/aromatherapy" txt="Recommended Oils"/>
           </div>
        );
    }
}

export default Spices;
