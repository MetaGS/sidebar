import React, { Component } from 'react';

import { makeRequest } from '../utils/makeRequest';
import Messages from '../messages/Messages';
import Loading from '../utils/loading';
import LoginView from './LoginView';
import MainTransparent from '../utils/mainTransparent';

class Login extends Component {
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
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.textInput = React.createRef();
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

    keyDownListener = (event) => {
        if(event.code ==='Enter' || event.code === 'NumpadEnter') {
            
            this.onSubmit(event);
        }
    }



    componentDidMount() {
        document.addEventListener('keydown',this.keyDownListener);
    }

    componentWillUnmount(){
        document.removeEventListener('keydown',this.keyDownListener);
    }




    onSubmit(e) {
        e.preventDefault(); // it is tied with enter key on keybord, need to connect in the future;

        const { data } = this.state;
        const errors = this.checkForErrors(data);
        console.log(data);
        if (Object.keys(errors).length === 0) {
            console.log('there is no errors');
            this.setState({ loading: !this.state.loading });

            const [field, save] = this.props.handleParentState('userData');

            // makeRequest accepts only json data
            const json = JSON.stringify(data)
            makeRequest(json).then((data) => {

                // this.setState({ loading: false });
                data = JSON.parse(data);
                data.loggedIn = true;
                save(data)
                this.props.onClick();

            })

        } else {
            this.setState({ errors: errors });
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
        const onClick = this.props.onClick;
        const phone = this.props.width > 750 ? 'usual' : 'wider';
        const loading = <MainTransparent styles={phone}> <Loading /> </MainTransparent>;
        const loginInputs = <LoginView
            utils={{
                data, errors, onClick, inputRef: this.textInput,// here we pass ref forward (experimenting)
                phone, onSubmit: this.onSubmit,
                handleChange: this.handleChange,
                handleCheckbox: this.handleCheckbox
            }}
        />

        return this.state.loading ? loading : loginInputs;
    }

}

export default Login;