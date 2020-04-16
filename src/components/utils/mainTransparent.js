import React from 'react';
import styles from './mainTransparent.module.css';

export default function MainTransParent(props){

    const  closeOnTransparentClick = (e) => {
        const className = e.target.className;
        console.log(`watch out ${className}`);
        if (className.includes(styles.main)) {
            props.onClick(e);
        }
    }
    
    
    return (
    <div className={`${styles.main} ${props.styles}`} onClick={closeOnTransparentClick}>
            {props.children}
        </div>
    );
}


MainTransParent.defaultProps = {
    onClick: function(){}
}