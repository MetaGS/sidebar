import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link, NavLink} from 'react-router-dom';

import List from '../sidebarList/List';
import LoginButton from '../sidebarList/loginButton/loginButtonMain';
import MainTransparent from '../utils/mainTransparent';

import './Sidebar.css';
import { listData } from '../app/data';

class Sidebar extends Component {

    render() {
        const {  media } = this.props;

        return (
            <MainTransparent styles="main-transparent" onClick={this.props.onClick}>

                <div className={`sidebar-main ${media}`}>
                    <div className="inner-container">
                    {/* <ul style={{}}>
                        <NavLink to='/' exact activeClassName={{}}>
                            <li>Main</li>
                        </NavLink>
                        <Link to='/docs'>
                            <li>Docs</li>
                        </Link>
                        <Link to='/contacts'>
                            <li>Contacts</li>
                        </Link>
                        <NavLink to='./about' activeClassName={{}}>
                            <li>About</li>
                        </NavLink>
                    </ul> */}
                        <LoginButton handlers={this.props.handlers} />
                        {listData.map((item, index) => {
                            return <List item={item} key={`${index + item}`} />
                        })}
                    </div>
                </div>
            </MainTransparent>
        )
        
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
