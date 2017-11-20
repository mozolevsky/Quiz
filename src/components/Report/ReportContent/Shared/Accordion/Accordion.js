import React from 'react';
import Collapse, {Panel} from 'rc-collapse';
import PropTypes from 'prop-types';
import ColumnList from '../ColumnList/ColumnList';

import './Accordion.css';

const Accordion = (props) => {
    return (
        <Collapse accordion={true} className={`rc-collapse_${props.type}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <Panel header={item.title} key={i}>
                            <ColumnList list={item.food}/>
                        </Panel>
                    )
                })
            }
        </Collapse>
    )
}

Accordion.propTypes = {
    type: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
}

export default Accordion;