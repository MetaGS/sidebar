import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Sidebar from '../sidebar/Sidebar';
import {listData} from './data'
import Login from '../login/Login';
import {SignUp} from '../signup/signup'




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      activity:false,
      signUpPage:false,
      loginPage:false,
      height: 0,
      width: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.updateDimension = this.updateDimension.bind(this);
  }

  updateDimension(){
    const height = window !== undefined ? window.innerHeight : 0;
    const width = window !== undefined ? window.innerWidth : 0;

    const stateCopy = {...this.state};
    stateCopy.width = Number(width);
    stateCopy.height = Number(height);

    this.setState(stateCopy)
  }

  componentDidMount(){
    this.updateDimension();
    window.addEventListener('resize',this.updateDimension);
  }

  componentWillUnmount(){
    window.removeEventListener('resize',this.updateDimension);
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
    // copy.activity = copy.width > 750 ? copy.activity : false;
    copy.loginPage = !copy.loginPage;
    this.setState(copy);
  }
  
  handleSignUp(e){
    e.preventDefault();
    const copy = {...this.state} 
    copy.loginPage = false;
    // copy.activity = copy.width > 750 ? copy.activity : false;
    copy.signUpPage = !copy.signUpPage;
    this.setState(copy);
   }

  render(){
    const handleLogin = this.handleLogin;
    const handleSignUp = this.handleSignUp;
    
    return (
      <div className="App">
        {/* <h2>{`height ${this.state.height}  width ${this.state.width}`}</h2> */}
        <Sidebar 
          {...this.state}
          handlers={{handleLogin, handleSignUp}}
          listData={listData}
          onClick={this.handleClick}
        />
        {this.state.loginPage && <Login onClick={handleLogin} width={this.state.width}/>}
        {this.state.signUpPage && <SignUp onClick={handleSignUp} width={this.state.width} />}
        <header className="App-header">
          
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
