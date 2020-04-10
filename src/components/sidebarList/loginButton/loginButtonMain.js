import React from 'react';
import './loginButton.css';
import LoginButton from './loginButton';


export default function LoginMain(props) {

    const {userData} = props;
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
    const { handleLoginClick, handleSignUpClick } = props.handlers;
    // also when user clicks login or signup focus should be on the input
    const loginView = (
        <LoginButton>
            {[
                { onClick: handleLoginClick, text: 'Log in' },
                { onClick: handleSignUpClick, text: 'Sign up' }
            ]}
        </LoginButton>);
    const logoutView = (
        <LoginButton userData={userData} >
            {[{ onClick: logOut, text: 'Log out' }]}
        </LoginButton>);


        return loggedIn ? logoutView : loginView;
}