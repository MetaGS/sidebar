import React, {Component} from 'react';
import './Sidebar.css';
import List from '../sidebarList/List'



class Sidebar extends Component {
    render(){
        const active = this.props.activity;
        const texts = this.props.listData;
        if(active){
            return (
            <div className="main-transparent">
                <div className="sidebar-main">
                    {texts.map(item=>{
                        return <List item={item} />
                    })}
                </div>
            </div>
            )
        } else {
            return <div style={{display:"none",width:'10px',height:'10px',backgroundColor:'red'}}></div>;
        }
    }
}

export default Sidebar;