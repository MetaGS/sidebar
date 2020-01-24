import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import {listData} from './data'
import Login from '../login/Login';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activity:false,
      signUpPage:false,
      loginPage:false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleClick(e){
    e.preventDefault();
    const copy = {...this.state};
    copy.activity = !copy.activity;
    copy.loginPage = false;
    copy.signUpPage = false;

    this.setState(copy);
  }

  handleLogin(e){
    e.preventDefault();
    const copy = {...this.state} 
    copy.signUpPage = false;
    copy.loginPage = !copy.loginPage;
    this.setState(copy);
  }

  handleSignUp(e){
    e.preventDefault();
    const copy = {...this.state} 
    copy.loginPage = false;
    copy.signUpPage = !copy.sighUpPage;
    this.setState(copy);
   }

  render(){
    const handleLogin = this.handleLogin;
    const handleSignUp = this.handleSignUp;
    
    return (
      <div className="App">
        <Sidebar 
          {...this.state}
          handlers={{handleLogin, handleSignUp}}
          listData={listData}
          onClick={this.handleClick}
        />
        {this.state.loginPage&&<Login />}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button 
            className='toggleSidebar' 
            onClick={this.handleClick}
          >Open Sidebar
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
