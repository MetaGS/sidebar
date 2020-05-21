import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import AddPostsButton from './AddPostsButton';
import UserProfile from './UserProfile';

import styles from './Topbar.module.css';
import context from '../AppContext/mainContext';
import { dataForNavbar } from '../app/data';




export default function Topbar(props) {
    const { media } = props;

    const stylesRightBar = {}
    const stylesMain = {}
    const stylesUl = {};
    if (media === 'tablet' || media === 'mobile') {
        stylesRightBar.display = 'none';
        stylesUl.display = 'block';
        stylesMain.display = 'block';
    }

    const contextValue = useContext(context);
    const closeTabs = contextValue.handlePagesClick({});

    const { userData } = contextValue;

    return (
        <>
            {props.children}

            <div className={`${styles.main}`} >

                <div className={styles.leftBar}>
                    {/* Burger and Logo  */}
                    <div
                        className={`${styles.burger} ${props.active && styles.active}`}
                        onClick={props.onClick} >
                        <span className={styles.burger_self}></span>
                    </div>
                    <h2 className={styles.logo_self}>_CODE</h2>

                    {/* search */}
                    <div className={`${styles.search} ${styles[media]}`}>
                        <i className={`search icon ${styles.searchIcon}`}></i>
                        <input
                            type="text" className={`${styles.searchItem} ${styles[media]}`}
                            placeholder="Search Inside docs..." />
                    </div>

                    {/* user Profile photo and setup */}
                    <UserProfile userData={userData} />
                </div>

                <div className={styles.right_bar} style={stylesRightBar}>
                    <ul onClick={closeTabs} style={stylesUl}>
                        {/* AddPostButton Caret */}
                        <AddPostsButton data={dataForNavbar} />

                        {/* Nav Buttons as Docs Main etc. */}
                        <NavLink to='/' exact activeClassName={styles.activeLink}>
                            <li className={styles.navButton}>Main</li>
                        </NavLink>
                        <Link to='/docs'>
                            <li className={styles.navButton}>DOCS</li>
                        </Link>
                        <Link to='/contacts'>
                            <li className={styles.navButton}>Contacts</li>
                        </Link>
                        <NavLink to='./about' activeClassName={styles.activeLink}>
                            <li className={styles.navButton}>About</li>
                        </NavLink>
                        <NavLink to='./createpost2' activeClassName={styles.activeLink}>
                            <li className={styles.navButton}>createPost2</li>
                        </NavLink>
                    </ul>
                </div>

            </div>
        </>
    )
}