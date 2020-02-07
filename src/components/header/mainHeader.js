import React, { Component } from 'react';
import styles from './mainHeader.module.css';
import SignUpView from './signupView';


class MainHeader extends Component {


    render() {
        return (
            <div className={styles.fullWidth}>
                <div className={styles.mainContainer}>
                    <div className={styles.content}>
                        <div className={`${styles.contentLeft} ${styles.contentItem}`}>
                            <h1 className={styles.headerH1}> Here you can share you code</h1>
                            <p className={styles.headerP}>
                                Lorem ipsum is placeholder text commonly 
                                used in the graphic, print, and publishing
                                 industries for previewing layouts and visual mockups.
                            </p>
                        </div>
                        <div className={`${styles.contentRight} ${styles.contentItem}`}>
                            <SignUpView />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHeader;