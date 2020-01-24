import React from 'react';
import './loginButton.css';
import photo from '../../loginImage.png'

export function LoginButton(props){
    return (
        <div className='login-container'>
            <img src={photo} alt="Unauthorized user" className='loginImage'/>
            <div className='login-buttons'>
                <button className='loginButton mainClick login-1 login-11' 
                        onClick={props.handlers.handleLogin}
                        >Log in
                </button>
                <button className='signupButton mainClick login-1'
                        onClick={props.handlers.handleSignUp}
                        >Sign up
                </button>
            </div>
        </div>
    )
}