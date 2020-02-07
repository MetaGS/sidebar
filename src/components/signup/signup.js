import React, {useEffect} from 'react';
import './signup.css';
import MainTransparent from '../utils/mainTransparent';
import FocusHOC from '../utils/focusHOC';
import CloseButton from '../buttons/closeButton';
import SignUpView from './signupView';

export const SignUpWithFocus = FocusHOC(SignUp);

export default function SignUp(props) {


    const phone = props.width > 750 ? 'usual' : 'wider';
    return (
        <MainTransparent styles={phone}>
            <SignUpView {...props}/>
        </MainTransparent>
    )
}