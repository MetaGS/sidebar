import React, { Component } from 'react';

import Block from './Block';

import bcImage from '../../blueprintIronMan.png'
import styles from './styles.module.css';

const stylesSelf = { 
    backgroundColor: '#191C38', 
    backgroundImage: `url(${bcImage})`,
}



const DocsPage = (props) => {
    return (
        <div className={styles.main} style={stylesSelf}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                {content.map(({icon,...rest}) => {
                    return <Block icon={icon} description={
                        rest
                    }/>
                })}
            </div>
        </div>
    )
}

export default DocsPage;


const content = [
    {
        icon: 'large home',
        head: 'This is the Header',
        text: 'Change user settings'
    },
    {
        icon: 'chart line',
        head: 'This is the Header',
        text: 'Change user settings'
    },
    {
        icon: 'cloud upload',
        head: 'This is the Header',
        text: 'Change user settings'
    },
    {
        icon: 'play',
        head: 'This is the Header',
        text: 'Change user settings'
    },
    {
        icon: 'sync alternate',
        head: 'This is the Header',
        text: 'Change user settings'
    },
    {
        icon: 'cogs',
        head: 'This is the Header',
        text: 'Change user settings'
    }
];