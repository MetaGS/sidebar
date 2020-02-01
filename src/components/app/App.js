import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import { listData } from './data'
import Login from '../login/Login';
import { SignUp } from '../signup/signup'
import Topbar from '../topbar/Topbar';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: false,
      signUpPage: false,
      loginPage: false,
      height: 0,
      width: 0
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleToggle = this.handleToggle.bind(this);
    
    this.updateDimension = this.updateDimension.bind(this);
  }

  updateDimension() {
    const height = window !== undefined ? window.innerHeight : 0;
    const width = window !== undefined ? window.innerWidth : 0;

    const stateCopy = { ...this.state };
    stateCopy.width = Number(width);
    stateCopy.height = Number(height);

    this.setState(stateCopy)
  }

  componentDidMount() {
    this.updateDimension();
    window.addEventListener('resize', this.updateDimension);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension);
  }

  handleClick(e) {
    e.preventDefault();
    const copy = { ...this.state };
    copy.activity = !copy.activity;
    copy.loginPage = false;
    copy.signUpPage = false;
    this.setState(copy);
  }



  handleToggle(itemToToggle, close) {
    return (e) =>{
      e.preventDefault();
      const copy = { ...this.state }
      copy[close] = false;
      copy[itemToToggle] = !copy[itemToToggle];
      this.setState(copy);
    }
  }

  render() {
    const handleLoginToggle = this.handleToggle('loginPage','signUpPage');
    const handleSignUpToggle = this.handleToggle('signUpPage','loginPage');

    return (
      <div className="App">
        <Topbar onClick={this.handleClick} active={this.state.activity}>

          <Sidebar
            {...this.state}
            handlers={{ handleLogin:handleLoginToggle, handleSignUp:handleSignUpToggle }}
            listData={listData}
            onClick={this.handleClick}
          />

        </Topbar>
        {this.state.loginPage && <Login onClick={handleLoginToggle} width={this.state.width} />}
        {this.state.signUpPage && <SignUp onClick={handleSignUpToggle} width={this.state.width} />}

        <header className="App-header">

          <div style={{ backgroundColor: 'green', padding: 20, borderRadius: 20 }}
            className='toggleSidebar'
            onClick={this.handleClick}
          >Open Sidebar
          </div>
          
          
        </header>
      </div>
    );
  }
}

export default App;
