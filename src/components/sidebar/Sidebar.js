import React, { Component } from 'react';
import './Sidebar.css';
import List from '../sidebarList/List';
import LoginButton from '../sidebarList/loginButton/loginButtonMain'
import CloseButton from '../buttons/closeButton';
import PropTypes from 'prop-types';



class Sidebar extends Component {

    closeOnTransparentClick = (e) => {
        const className = e.target.className;
        console.log(className);
        if (className === 'main-transparent') {
            this.props.onClick(e);
        }
    }


    render() {
        const { active, userData, listData } = this.props;
        const sidebarWidth = Number(this.props.width) > 750 ? 'sidebar-main-laptop' : 'sidebar-main-phone';
        const closeButtonLayout = sidebarWidth === 'sidebar-main-laptop' ? 'close-btn-sidebar-laptop' : 'close-btn-sidebar-phone';


        if (active) {
            return (
                <div className="main-transparent" onClick={this.closeOnTransparentClick}>

                    <div className={`sidebar-main ${sidebarWidth}`}>
                        <div className="inner-container">
                            {/* <CloseButton styles={closeButtonLayout} onClick={this.props.onClick} /> */}
                            <LoginButton handlers={this.props.handlers} userData={userData} />
                            {listData.map(item => {
                                return <List item={item} />
                            })}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div style={{ display: "none", width: '10px', height: '10px', backgroundColor: 'red' }}></div>;
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
