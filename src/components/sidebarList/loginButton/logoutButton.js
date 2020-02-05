import React from 'react';
import './loginButton.css';
import photo from '../../../loginImage.png'

export default function LogoutButton(props) {

    const userData = props.userData;
    const logOut = props.logOut;
    const userPhoto = userData.photoSrc;


    return (
        <div className='login-container'>
            <img src={userPhoto ? userPhoto : photo} alt="User photography" className='loginImage' />
            <div className='login-buttons'>
                <button className='loginButton mainClick login-1 login-11'
                    onClick={logOut}
                >{'Log out'}
                </button>
            </div>
        </div>
    )
}