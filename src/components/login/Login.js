import React, {Component} from 'react';
import './Login.css';
import {PropTypes} from 'prop-types';
import {Input} from './input'

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
        return (
            <div className='main-login'>
                    <h1>{JSON.stringify(this.state)}</h1>
                <div className='login-inputs'>
                    <form className='inner-form'>
                    <Input 
                        name='uemail'
                        type='text'
                        placeholder='Enter email'
                        value={this.state.uemail}
                        onChange={this.handleChange}
                        text='Email'
                    />
                    
                    <Input 
                        name='upassword'
                        type='password'
                        placeholder='Enter password'
                        value={this.state.upassword}
                        onChange={this.handleChange}
                        text='Password'
                    />
                    <button type='submit'onClick={this.handleChange}>Submit</button>
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