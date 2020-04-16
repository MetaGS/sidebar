import React from 'react';

export default function SignUpView (props){
    

    return (
        <div className='signup-main'>
                <div className="signup-self">
                    <h2 className='signup-header'>Sign Up</h2>
                    <input type='text' name='username' placeholder='Username' ref={props.inputRef}/>
                    <input type="text" name='email' placeholder='Email' />
                    <input type='password' name='password' placeholder='Password' />
                    <input type='password' name='confirm-password' placeholder='Confirm password' />
                    <button className='mainClick submit-signup'>Submit</button>
                    <button className='mainClick submit-signup' onClick={props.onClick}>Cancel</button>
                </div>
                <div className='signup-thirdparty'>
                    <hr className='hline' />
                    <p className='or'>OR</p>
                    <button className='facebook'>Log in with <i className="large facebook icon"></i><span className='bold'>Facebook</span></button>
                    <button className='twitter'> Log in with <i className="large twitter icon"></i><span className='bold'>Twitter</span></button>
                    <button className='google'>  Log in with <i className="large google plus icon"></i><span className='bold'>Google+</span></button>
                </div>
            </div>
    )
    
}