import React from 'react';
import styles from './signup.module.css'

export default function SignUpView (props){
    return (
        <div className={styles.signupMain}>
                <div className={styles.signupSelf}>
                    <h2 className={styles.signupHeader}>Sign Up</h2>
                    <input type='text' name='username' placeholder='Username' ref={props.inputRef}/>
                    <input type="text" name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input type='password' name='confirm-password' placeholder='Confirm password' />
                    <button className='mainClick submit-signup'>Submit</button>
                </div>
                
            </div>
    )
}