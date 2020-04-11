import React, { useEffect, useContext } from 'react';

import MainTransparent from '../utils/mainTransparent';
import CloseButton from '../buttons/closeButton';
import SignUpView from './signupView';

import FocusHOC from '../utils/focusHOC';
import './signup.css';
import context from '../AppContext/mainContext';


export const SignUpWithFocus = FocusHOC(SignUp);

export default function SignUp(props) {

    const value = useContext(context)

    console.log(`here is context value: ${value}`)
    const phone = props.width > 750 ? 'usual' : 'wider';
    return (
        <MainTransparent styles={phone}>
            <SignUpView {...props} />
        </MainTransparent>
    )
}