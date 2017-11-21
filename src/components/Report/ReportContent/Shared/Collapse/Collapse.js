import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Collapse.css';


class Collapse extends Component {
    state = {
        isOpen: false
    }

    toSwitch = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const collapseStyle = this.state.isOpen ? 'opened' : 'closed';
        const {title, text} = this.props;

        return (
            <div className={`collapse collapse_${collapseStyle}`} onClick={this.toSwitch}>
                <p className="collapse__title">{title}</p>
                <div className="collapse__desc">
                    <LinesEllipsis
                        text={text}
                        maxLine={this.state.isOpen ? '100' : '2'}
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        )
    }
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Collapse;