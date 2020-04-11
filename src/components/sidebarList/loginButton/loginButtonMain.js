import React, { useContext } from 'react';

import LoginButton from './loginButton';

import './loginButton.css';
import context from '../../AppContext/mainContext';

export default function LoginMain(props) {

    const contextValue = useContext(context);

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
    const { handleSignUpClick } = props.handlers;

    const handleLoginClick = contextValue.handlePagesClick({ loginPageActivity: 'toggle', sideBarActivity: true })
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