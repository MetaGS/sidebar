import React, {useState} from 'react';
import styles from './Topbar.module.css'


export default function Topbar(props){
    // const [active, setActive] = useState(props.active);
    


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
                <div className={styles.right_bar}>
                    <ul>
                        <li>Main</li>
                        <li>Docs</li>
                        <li>Contacts</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}