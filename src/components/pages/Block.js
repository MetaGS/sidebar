import React, { Component } from 'react';
import styles from './styles.module.css';

const Block = (props) => {
    const { icon, description } = props;
    return (
        <div className={styles.mainBlock}>
            <i className={`blue ${icon} icon`} style={{}}></i>
            <div className={styles.blockTextHead}>
                {description.head}
            </div>
            <div className={styles.blockTextParagraph}>
                {description.text}
            </div>
        </div>
    )
};

export default Block;
