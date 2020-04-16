import React, {Component} from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends Component {
    render(){
        const {item, onClick} = this.props;
        return (
            <div className="container mainClick" onClick={onClick}>
                <div className="textSidebar">{item.text}</div>
            </div>
        )
    }
}

export default List;

List.propTypes = {
    item: PropTypes.object.isRequired,
}