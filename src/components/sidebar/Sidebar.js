import React, {Component} from 'react';
import './Sidebar.css';
import List from '../sidebarList/List';
import {LoginButton} from '../sidebarList/loginButton'
import CloseButton from './closeButton';
import PropTypes from 'prop-types';



class Sidebar extends Component {
    render(){
        const active = this.props.activity;
        const texts = this.props.listData;
        if(active){
            return (
            <div className="main-transparent">
                <div className="sidebar-main">
                    <div className="inner-container">
                        <CloseButton onClick={this.props.onClick}/>
                            <LoginButton handlers={this.props.handlers}/>
                            {texts.map(item=>{
                                return <List item={item} />
                            })}
                    </div>
                </div>
            </div>
            )
        } else {
            return <div style={{display:"none",width:'10px',height:'10px',backgroundColor:'red'}}></div>;
        }
    }
}

export default Sidebar;

Sidebar.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired
    })),
    activity: PropTypes.bool
};

Sidebar.defaultProps = {
    activity: false
}
