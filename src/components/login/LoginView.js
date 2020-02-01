import React from 'react';
import { PropTypes } from 'prop-types';
import { Input } from './input'
import CloseButton from '../buttons/closeButton';
import Messages from '../messages/Messages';
import './LoginView.css';

export default function LoginView(props){
    const {phone,onClick,onSubmit,errors,data,handleChange,handleCheckbox} = props.utils;

    return (
        (<div className={`main-login ${phone}`}>

                <div className='login-inputs'>
                    <form className='inner-form' onSubmit={onSubmit}>

                        <CloseButton styles='close-btn-login' onClick={onClick} />
                        <Input
                            name='email'
                            type='text'
                            placeholder='Enter email'
                            value={data.email}
                            onChange={handleChange}
                            text='Email'
                            tabIndex={1}
                        />
                        {errors.email && <Messages styles='danger' text={errors.email} />}

                        <Input
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            value={data.password}
                            onChange={handleChange}
                            text='Password'
                        />
                        {errors.password && <Messages styles='danger' text={errors.password}/>}

                        <button className='login_submit' type='submit' onClick={onSubmit}>Log in</button>
                        <Input
                            type='checkbox'
                            isChecked={data.remember}

                            onChange={handleCheckbox}
                            name={'remCheck'}
                            text='Remember me'
                        />
                    </form>
                </div>

            </div>)
    )
}