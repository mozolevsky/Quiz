import React, { Component } from 'react';
import { Line } from 'rc-progress';
//import PropTypes from 'prop-types';



class FinalCalculationsBar extends Component {
    render() {
       // const {stepQuestions, toNextStep} = this.props;
        return (
            <div className="final-calc">
                <p className="final-calc__progress">42%</p>
                <Line
                    percent={42}
                    strokeWidth="0.5"
                    strokeColor="#7c5cd1"
                    trailColor="transparent"
                    style={{width: '100%'}}
                />
            </div>
        );
    }
}

/*Questions.PropTypes = {
    stepQuestions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        title: PropTypes.number,
        text: PropTypes.string.isRequired,
    })).isRequired
};*/

export default FinalCalculationsBar;
