import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContinueBtn from '../Shared/ContinueBtn/ContinueBtn';
import TipText from '../Shared/TipText/TipText';
import ChartBlock from '../Shared/ChartBlock/ChartBlock';
import Wrapper from '../../../hoc/Wrapper';
import './Overview.css';


class Overview extends Component {
    render() {
        const {
            titles, 
            texts, 
            tip
        } = this.props.pageData.content;

        const {
            vatta,
            pitta,
            kapha,
            name,
            type
        } = this.props;

        return (
           <Wrapper>
               <section className="overview__top">
                    <div className="overview__top-text">
                        <h1 className="title overview__top-title">Hey, {name}.<br/> According to the quiz, <b>your body type is {type}.</b></h1>
                        <p className="overview__desc">{texts[0]}</p>
                    </div>

                    <div className="overview__chart-wrapper">
                        <ChartBlock
                            vatta={vatta}
                            pitta={pitta}
                            kapha={kapha}
                        />
                    </div>
               </section>

               <div className="overview__divider"></div>

               <h3 className="title">{titles[1]}</h3>
               <p>{texts[1]}</p>
                <p>{texts[2]}</p>

                <TipText 
                    title={tip.title}
                    descFirst={tip.texts[0]}
                    descSecond={tip.texts[1]}
                />

                <div className="overview__divider"></div>

                <h3 className="title">{titles[2]}</h3>
                <p>{texts[3]}</p>
                <p>{texts[4]}</p>

                <h3 className="title">{titles[3]}</h3>
                <p>{texts[5]}</p> 
                <p>{texts[6]}</p> 
                <p>{texts[7]}</p> 
                <p>{texts[8]}</p> 

                <h3 className="title">{titles[4]}</h3>
                <p>{texts[9]}</p> 
                <p>{texts[10]}</p>

                <h3 className="title">{titles[5]}</h3>
                <p>{texts[11]}</p>
                <p>{texts[12]}</p>

                <h3 className="title">{titles[6]}</h3>
                <p>{texts[13]}</p>

                <p>{texts[14]}</p>

                <p>{texts[15]}</p>

                <ContinueBtn link="/report/foods-and-diet" txt="Foods and Diet"/>    
           </Wrapper>
        );
    }
}

export default Overview;