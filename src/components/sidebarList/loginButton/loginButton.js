import React from 'react';
import PropTypes from 'prop-types';
import './loginButton.css';
import defaultPhoto from '../../../userDefault.png'

export default function LoginButton(props) {

    const { userData } = props;

    const photo = userData.photoSrc || defaultPhoto;


    return (
        <div className='login-container'>
            <img src={photo} alt="Unauthorized user" className='loginImage' width='100px' height='100px' />
            <div className='login-buttons'>
                {props.children.map((buttonObject, index) => {

                    return (
                        <button
                            className='loginButton mainClick login-1 login-11'
                            key={`index${buttonObject.text}`}
                            onClick={buttonObject.onClick}
                        >
                            {buttonObject.text}
                        </button>
                    );
                })}
            </div>
        </div>
    )
}

LoginButton.propTypes = {
    children: PropTypes.array.isRequired
}

LoginButton.defaultProps = {
    children: [],
    userData: {}
}
