import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import ColumnList from '../Shared/ColumnList/ColumnList';

class Exercise extends Component {
    render() {
        const {
            titles,
            texts,
            typesOfExercises,
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

                <ColumnList type="purple" list={typesOfExercises} style={{marginBottom: 56}}/>

                <ContinueBtn link="/report/herbs" txt="Recommended Herbs"/>
           </div>
        );
    }
}

export default Exercise;