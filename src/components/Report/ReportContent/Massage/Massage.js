import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import TopImg from '../Shared/TopImg/TopImg';


class Massage extends Component {
    render() {
        return (
           <div>
                <TopImg 
                    source="http://via.placeholder.com/801x329" 
                    desc="pics for img"
                    offset="left"
                    />
           </div>
        );
    }
}

export default Massage;
