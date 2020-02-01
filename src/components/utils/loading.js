import React from 'react';
import styles from './loading.module.css'


export default function Loading(props) {
    return(
        <div className={styles.main}>
            <div className={styles.spinner}>
                <span className={styles.spinner_itself1}></span>
                <span className={styles.spinner_itself2}></span>
                <span className={styles.spinner_itself3}></span>
            </div>
        </div>
    )
}