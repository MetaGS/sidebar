import React, { Component } from 'react';

import { LoginViewWithFocus as LoginView } from './LoginView';
import MainTransparent from '../utils/mainTransparent';
import Loading from '../utils/loading';

import { makeRequest } from '../utils/makeRequest';
import styles from './LoginView.module.css';
import contextValue from '../AppContext/mainContext';


class Login extends Component {
    static contextType = contextValue;
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: '',
                remember: true
            },
            loading: false,
            errors: {}
        }
    }

    handleChange = (e) => {
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

    keyDownListener = (event) => {
        if (event.code === 'Enter' || event.code === 'NumpadEnter') {
            this.onSubmit(event);
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDownListener);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDownListener);
    }




    onSubmit = (e) => {
        e.preventDefault(); // it is tied with enter key on keybord, need to connect in the future;

        const { data } = this.state;
        const errors = this.checkForErrors(data);
        
        if (Object.keys(errors).length === 0) {
            
            this.setState({ loading: true });

            const [, save] = this.context.handleParentState('userData');
            
            // makeRequest accepts only json data
            const json = JSON.stringify(data)
            makeRequest(json).then((dataFromServer) => {
                console.log(dataFromServer)
                
                dataFromServer = JSON.parse(dataFromServer);
                dataFromServer.loggedIn = true;
                save(dataFromServer)
                this.props.onClick();
            })

        } else {
            this.setState({ errors: errors });
        }
    }

    checkForErrors = (data) => {
        const errors = {};
        if (!data.password) errors.password = 'Password field cant be blank!';
        if (!data.email) errors.email = 'Email field cant be blank';
        return errors;

    }

    handleCheckbox = (e) => {
        const value = e.target.checked;
        this.setState({ remember: value })
    }


    render() {
        const { data, errors } = this.state;
        const {onClick, media} = this.props;
        const loading =  <Loading /> ;
        const loginInputs = <LoginView
            {...{
                data, errors, onClick, 
                onSubmit: this.onSubmit,
                handleChange: this.handleChange,
                handleCheckbox: this.handleCheckbox
            }}
        />

        return (
            // just 'media' for inner div media styles as '.mobile .inner-form {}' 
            // styles.main is for additional main styling for maintransparent
            // styles[phone] for media, and phone is for class selectors (which put in the begining of
            // development so need to delete at the end )
            // mainstranparent contains one style.module in own folder, and accept one more style.module 
            // where it will be used
            <MainTransparent styles={`${media} ${styles.main} ${styles[media]}`} onClick={onClick}>
                { this.state.loading ? loading : loginInputs }
            </MainTransparent>
        )
    }

}

export default Login;