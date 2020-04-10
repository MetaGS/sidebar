import React, {useState} from 'react';
import styles from './Topbar.module.css';
import {Link, NavLink} from 'react-router-dom';


export default function Topbar(props){
    // const [active, setActive] = useState(props.active);
    const phone = props.width > 750 ? 'usual' : 'wider' ;
    const displayOrNot = {}
    if(phone === 'wider'){
        displayOrNot.display = 'none';
    } 


    // function toggleBurger(e){
    //     // setActive(!props.active);
    //     props.onClick(e);
    // } ${props.active?styles.fixed_main:''}

    return (
        <div className='container1'>
            {props.children}
            <div className={`${styles.main} `}>
                <div className={styles.logo}>
                    <div 
                        className={`${styles.burger} ${props.active && styles.active}`}
                        onClick={props.onClick}
                        >
                        <span className={styles.burger_self}></span>
                    </div>
                    <h2 className={styles.logo_self}>CodeWithMe</h2>
                </div>
                <div className={styles.right_bar} style={displayOrNot}>
                    <ul>
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
                            <input type="text" className="class"/>
                            <i className="search icon"></i>
                    </ul>
                </div>
            </div>
        </div>
    )
}