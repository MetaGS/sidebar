import React, { Component } from 'react';
import PropTypes from 'prop-types';

import List from '../sidebarList/List';
import LoginButton from '../sidebarList/loginButton/loginButtonMain'

import './Sidebar.css';
import { listData } from '../app/data';

class Sidebar extends Component {

    closeOnTransparentClick = (e) => {
        const className = e.target.className;
        console.log(`watch out ${className}`);
        if (className === 'main-transparent') {
            this.props.onClick(e);
        }
    }


    render() {
        const { active, userData, width } = this.props;
        const sidebarWidth = +width > 750 ? 'sidebar-main-laptop' : +width < 450 ? 'sidebar-main-phone' : 'sidebar-main-tablet';
        const closeButtonLayout = sidebarWidth === 'sidebar-main-laptop' ? 'close-btn-sidebar-laptop' : 'close-btn-sidebar-phone';
        console.log(sidebarWidth);

        if (active) {
            return (
                <div className="main-transparent" onClick={this.closeOnTransparentClick}>

                    <div className={`sidebar-main ${sidebarWidth}`}>
                        <div className="inner-container">
                            {/* <CloseButton styles={closeButtonLayout} onClick={this.props.onClick} /> */}
                            <LoginButton handlers={this.props.handlers} userData={userData} />
                            {listData.map((item, index) => {
                                return <List item={item} key={`${index + item}`} />
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
