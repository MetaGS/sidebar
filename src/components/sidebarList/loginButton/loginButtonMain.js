import React from 'react';
import './loginButton.css';
import LoginButton from './loginButton';
import LogoutButton from './logoutButton';


export default function LoginMain(props) {

    const userData = props.userData;
    const loggedIn = userData.loggedIn;

    function logOut() {
        const [, save] = props.handlers.handleParentState('userData');
        save({
            loggedIn: false,
            nickName: '',
            name: '',
            email: ''
        })
    }
    // also when user clicks login or signup focus should be on the input
    const loginView = <LoginButton onLoginClick={props.handlers.handleLoginClick}
        onSignUpClick={props.handlers.handleSignUpClick} />;
    const logoutView = <LogoutButton logOut={logOut} userData={userData}/>


    return loggedIn ? logoutView: loginView;
}