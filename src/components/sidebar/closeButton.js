import React, {Component} from 'react';
import styles from './closeButton.module.css';


export default function CloseButton(props){
    return (
        <button className={styles.close} onClick={props.onClick}><span className='spanX'>X</span></button>
    )
}