import React, { useState, useContext, useEffect } from 'react';

import styles from './Topbar.module.css';


export default function (props) {
    const [profileDropdown, setDropdown] = useState(false);

    const handleDropdown = (event) => {
        setDropdown(!profileDropdown);
    }

   

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

    // Unify dropdown between addpostButton and userProfile, unify onMouseLeave,
    //  may be you need to create another component on utils

    return (
        <div className={`bowlFont ${styles.userMain}`} 
             onClick={handleDropdown} 
             
             >   
            {/* ------------- */}
            <div className={styles.userPhoto}>
                <img src={userData.photoSrc} className={styles.userPhotoSelf} alt="user profile" />
            </div>
            {/* ------------ */}
            <div className={styles.userData}>
                <h2 className={`bowlFont ${styles.userName}`}>{userData.name}</h2>
                <p className={styles.userText}>{userData.text}</p>
            </div>
            {/* ------------- */}
            { profileDropdown &&
                (<div className={styles.mainAddButtons} onMouseLeave={handleDropdown}>
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
                    <div className={styles.tooltipArrow}>div</div>
                </div>)
            }
        </div>
    );
}