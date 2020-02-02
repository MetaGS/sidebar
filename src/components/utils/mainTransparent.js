import React from 'react';
import styles from './mainTransparent.module.css';

export default function MainTransParent(props){
    return (
    <div className={`${styles.main} ${styles[props.styles]} ${props.styles}`}>
            {props.children}
        </div>
    )
}