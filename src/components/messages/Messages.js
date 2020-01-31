import React from 'react';
import PropTypes from 'prop-types';
import styles from './Messages.module.css'

export default function Message(props){
    return (
        <div className={styles[props.styles]}>{props.text}</div>
    );
}

Message.propTypes = {
    text: PropTypes.string
}