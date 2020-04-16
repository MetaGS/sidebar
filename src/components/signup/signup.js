import React, { useEffect, useContext } from 'react';

import MainTransparent from '../utils/mainTransparent';
import SignUpView from './signupView';

import FocusHOC from '../utils/focusHOC';
import './signup.css';
import context from '../AppContext/mainContext';

// temporarily im downloading styles.module.css from login folder, need to create custom in the future
import styles from './Signup.module.css';

export const SignUpWithFocus = FocusHOC(SignUp);

export default function SignUp(props) {

    const value = useContext(context)

    const { media } = props;
    return (
        <MainTransparent styles={`${media} ${styles.main} ${styles[media]}`} onClick={props.onClick}>
            <SignUpView {...props} />
        </MainTransparent>
    )
}