import React, {Component} from 'react';
import './List.css';

class List extends Component {
    render(){
        const item = this.props.item
        return (
            <div className="container" onClick={this.props.onClick}>
                <h3 className="text">{this.props.item.text}</h3>
            </div>
        )
    }
}

export default List;