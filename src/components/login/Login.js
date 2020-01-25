import React, {Component} from 'react';
import './Login.css';
import {PropTypes} from 'prop-types';
import {Input} from './input'
import CloseButton from '../buttons/closeButton';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            uemail: '',
            upassword: '',
            remember: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleChange(e) {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleCheckbox(e){
        const value = e.target.checked;
        this.setState({remember:value})
    }


    render(){
        const phone = this.props.width > 750 ? 'usual' : 'wider' ;
        
        return (
            <div className={`main-login ${phone}`}>
                    {/* <h1>{JSON.stringify(this.state)}</h1> */}
                <div className='login-inputs'>
                    <form className='inner-form'>
                    <CloseButton styles='close-btn-login' onClick={this.props.onClick}/>
                    <Input 
                        name='uemail'
                        type='text'
                        placeholder='Enter email'
                        value={this.state.uemail}
                        onChange={this.handleChange}
                        text='Email'
                        tabIndex={1}
                    />
                    
                    <Input 
                        name='upassword'
                        type='password'
                        placeholder='Enter password'
                        value={this.state.upassword}
                        onChange={this.handleChange}
                        text='Password'
                    />
                    <button type='submit'onClick={this.handleChange}>Log in</button>
                    <Input 
                        type='checkbox' 
                        isChecked={this.state.remember} 
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