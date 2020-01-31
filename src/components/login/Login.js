import React, { Component } from 'react';
import './Login.css';
import { PropTypes } from 'prop-types';
import { Input } from './input'
import CloseButton from '../buttons/closeButton';
import { makeRequest } from '../utils/makeRequest';
import Messages from '../messages/Messages';
console.log('hi')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: '',
                remember: true
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChange(e) {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            data: {
                ...this.state.data,
                [name]: value
            }
        })

    }

    onSubmit(e) {
        e.preventDefault()
        const { data } = this.state;
        const errors = this.checkForErrors(data);
        console.log(data);
        this.setState({ errors: errors });
        if (Object.keys(errors).length === 0) {
            console.log('there is no errors')

        } else {
            console.log('errors here');

        }



    }

    checkForErrors(data) {
        const errors = {};
        if (!data.password) errors.password = 'Password field cant be blank!';
        if (!data.email) errors.email = 'Email field cant be blank';
        return errors;

    }



    handleCheckbox(e) {
        const value = e.target.checked;
        this.setState({ remember: value })
    }


    render() {
        const { data, errors } = this.state;
        const phone = this.props.width > 750 ? 'usual' : 'wider';

        return (
            <div className={`main-login ${phone}`}>

                <div className='login-inputs'>
                    <form className='inner-form' onSubmit={this.onSubmit}>

                        <CloseButton styles='close-btn-login' onClick={this.props.onClick} />
                        <Input
                            name='email'
                            type='text'
                            placeholder='Enter email'
                            value={data.email}
                            onChange={this.handleChange}
                            text='Email'
                            tabIndex={1}
                        />
                        {errors.email && <Messages styles='danger' text={errors.email} />}

                        <Input
                            name='password'
                            type='password'
                            placeholder='Enter password'
                            value={data.password}
                            onChange={this.handleChange}
                            text='Password'
                        />
                        {errors.password && <Messages styles='danger' text={errors.password}/>}

                        <button className='login_submit' type='submit' onClick={this.onSubmit}>Log in</button>
                        <Input
                            type='checkbox'
                            isChecked={data.remember}

                            onChange={this.handleCheckbox}
                            name={'remCheck'}
                            text='Remember me'
                        />
                    </form>
                </div>

            </div>
        )
    }

}

export default Login;