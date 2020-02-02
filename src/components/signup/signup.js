import React from 'react';
import './signup.css';
import MainTransparent from '../utils/mainTransparent';

import CloseButton from '../buttons/closeButton';

export function SignUp(props) {
    const phone = props.width > 750 ? 'usual' : 'wider';
    return (
        <MainTransparent styles={phone}>
            <div className='signup-main'>
                <CloseButton styles='close-btn-signup' onClick={props.onClick} />
                <div className="signup-self">
                    <h2 className='signup-header'>Sign Up</h2>
                    <input type='text' name='username' placeholder='Username' />
                    <input type="text" name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input type='password' name='confirm-password' placeholder='Confirm password' />
                    <button className='mainClick submit-signup'>Submit</button>
                </div>
                <div className='signup-thirdparty'>
                    <hr className='hline' />
                    <p className='or'>OR</p>
                    <button className='facebook'>Log in with <span className='bold'>Facebook</span></button>
                    <button className='twitter'>Log in with <span className='bold'>Twitter</span></button>
                    <button className='google'>Log in with <span className='bold'>Google+</span></button>
                </div>
            </div>
        </MainTransparent>
    )
}