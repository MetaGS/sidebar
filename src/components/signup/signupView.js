import React from 'react';

import MainTransparent from '../utils/mainTransparent';

import styles from './Signup.module.css';

export default function SignUpView (props){
    

    return (
        <MainTransparent 
            styles={`${styles.mainForTransparent} ${styles[props.media]}`}
            onClick={props.onClick}
        >
            <div className='signup-main'>
                <div className="signupInner">
                <div className="signup-self">
                    <h2 className='signup-header'>Sign Up</h2>
                    <input type='text' name='username' placeholder='Username' ref={props.inputRef}/>
                    <input type="text" name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input type='password' name='confirm-password' placeholder='Confirm password' />
                    <button className='mainClick submit-signup '>Submit</button>
                    <button className='mainClick submit-signup submit-signup--pink' onClick={props.onClick}>Cancel</button>
                </div>
                <div className='signup-thirdparty'>
                    {/* <hr className='hline' /> */}
                    {/* <p className='or'>OR</p> */}
                    <a className='facebook' target='_blank' href='facebool.com'><i className="large facebook icon"></i></a>
                    <a className='twitter' href='twitter.com' target='_blank'>  <i className="large twitter icon"></i></a>
                    <a className='google' href='gmail.com' target='_blank'> <i className="large google plus icon"></i></a>
                    <a className='instagram' href='instagram.com' target='_blank'> <i className="large instagram icon"></i></a>
                </div>
                </div>
            </div>
        </MainTransparent>
    )
    
}