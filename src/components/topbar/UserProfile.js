import React, { useState, useContext, useEffect } from 'react';

import styles from './Topbar.module.css';
import useDropdown from '../utils/useDropdown';


export default function (props) {
    
    const userData = {
        name: 'Stainless Steel',
        photoSrc: 'https://placehold.it/55x55',
        text: 'Admin',
        buttons: [
            { text: 'Profile Settings' },
            { text: 'Your posts' },
            { text: 'Help' },
            { text: 'Regulatory' },
        ]
    }

    const dropdownToggler = (
        <div className={styles.userMain}>
            <div className={styles.userPhoto}>
                <img src={userData.photoSrc} className={styles.userPhotoSelf} alt="user profile" />
            </div>
            <div className={styles.userData}>
                <h2 className={`bowlFont ${styles.userName}`}>{userData.name}</h2>
                <p className={styles.userText}>{userData.text}</p>
            </div>
        </div>
    );

    const dropdownSelf = (
        <div 
            className={styles.mainAddButtons} 
            style={{marginLeft:'20px', width: '200px'}}
        >
            <div className={styles.mainAddButtonsItem}>
                {
                    userData.buttons.map(button => {
                        return (
                            <button className={styles.addButton}>
                                {button.text}
                            </button>
                        )
                    })
                }
                <button
                    className={styles.addButton}
                    style={{ borderTop: '1px solid grey' }}
                > Sign Out
                </button>
            </div>
        </div>
    );

    const dropdown = useDropdown(
        dropdownToggler,
        dropdownSelf,
        {
            top: '-4px',
            left: '40px'
        }
    );
    return dropdown;
    
}