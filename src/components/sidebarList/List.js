import React, {Component} from 'react';
import './List.css';
import PropTypes from 'prop-types';

class List extends Component {
    render(){
        const item = this.props.item
        return (
            <div className="container mainClick" onClick={this.props.onClick}>
                <div className="textSidebar">{this.props.item.text}</div>
            </div>
        )
    }
}

export default List;

List.propTypes = {
    item: PropTypes.object.isRequired,
    
}