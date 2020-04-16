import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Topbar.module.css';
import context from '../AppContext/mainContext';


export default function Topbar(props) {
    // const [active, setActive] = useState(props.active);
    const { media } = props;

    const displayOrNot = {} // it is style object to put into div below
    if (media === 'tablet' || media === 'mobile') {
        displayOrNot.display = 'none';
    }

    const contextValue = useContext(context);
    const closeTabs = contextValue.handlePagesClick({});


    // function toggleBurger(e){
    //     // setActive(!props.active);
    //     props.onClick(e);
    // } ${props.active?styles.fixed_main:''}

    return (
        <>
            {props.children}
            <div className={`${styles.main} `}>
                <div className={styles.logo}>
                    <div
                        className={`${styles.burger} ${props.active && styles.active}`}
                        onClick={props.onClick}
                    >
                        <span className={styles.burger_self}></span>
                    </div>
                    <h2 className={styles.logo_self}>_CODE</h2>
                </div>
                <div className={styles.right_bar} style={displayOrNot}>
                    <ul onClick={closeTabs}>
                        <NavLink to='/' exact activeClassName={styles.activeLink}>
                            <li>Main</li>
                        </NavLink>
                        <Link to='/docs'>
                            <li>Docs</li>
                        </Link>
                        <Link to='/contacts'>
                            <li>Contacts</li>
                        </Link>
                        <NavLink to='./about' activeClassName={styles.activeLink}>
                            <li>About</li>
                        </NavLink>
                        <input type="text" className="class" />
                        <i className="search icon"></i>
                    </ul>
                </div>
            </div>
        </>
    )
}