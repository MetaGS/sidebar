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
      activity: {
        sideBar: false,
        signUpPage: false,
        loginPage: false,
      },
      dimensions: {
        height: 0,
        width: 0
      },
      userData: {
        name: '',
        nickName: '',
        email: '',
        photoSrc: '',
        loggedIn: false
      }
    };

    this.updateDimension = this.updateDimension.bind(this);
    this.handleParentState = this.handleParentState.bind(this);
  
  }

  
  componentDidMount() {
    this.updateDimension();
    window.addEventListener('resize', this.updateDimension);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimension);
  }
  
  //need to check with console.log before use

  updateDimension() {
    const height = window !== undefined ? window.innerHeight : 0;
    const width = window !== undefined ? window.innerWidth : 0;

    const stateCopy = { ...this.state };
    stateCopy.dimensions.width = Number(width);
    stateCopy.dimensions.height = Number(height);

    this.setState(stateCopy)
  }


  // handleParentState(stateField, callbackFunc) {
  //   const copy = { ...this.state };
  //   const changedField = callbackFunc(copy[stateField]);
  //   // what if returns function
  //   this.setState({ ...copy, [stateField]: changedField },
  //       ()=>{console.log(this.state)}
  //   );
  // }

  handleParentState(stateField) {
    const copy = { ...this.state };
    const field = copy[stateField];
    // returns requested field with function which will concat with state when called
    return [field,(newField)=>{
      this.setState({ ...copy, [stateField]: newField },
          ()=>{console.log(this.state)}
      );
    }];
  }


  handlePages(obj={}) {  // made default for obj so that it didnt crashes

    return (e) => {
      const keys = Object.keys(obj);
      const activity = Object.entries(this.state.activity);
      let newActivity = {};

      activity.forEach(([page, show]) => {
        if (keys.includes(page)) {
          newActivity[page] = obj[page] === 'toggle' ? !show : obj[page];
        } else {
          newActivity[page] = false;
        }
      })
      console.log(newActivity)
      this.setState({ ...this.state, activity: newActivity });
    }
  }



  render() {
    const handleLoginActivity = this.handlePages({ loginPage: 'toggle', sideBar: true });
    const handleSignUpActivity = this.handlePages({ signUpPage: 'toggle',sideBar: true });
    const handleSideBarToggle = this.handlePages({ sideBar: 'toggle' });
    const handleParentState = this.handleParentState;
    const { loginPage: loginPageActivity, 
            signUpPage: signUpPageActivity,
            sideBar: sideBarActivity } = this.state.activity;
    const { width } = this.state.dimensions;

    return (
      <div className="App">
        <Topbar onClick={handleSideBarToggle} active={sideBarActivity} width={width}>

          <Sidebar
            {
              ...{ ...this.state, active: sideBarActivity, width:width }}
              handlers={{ handleLoginClick: handleLoginActivity, 
              handleSignUpClick: handleSignUpActivity, handleParentState: handleParentState }}
              listData={listData}
              onClick={handleSideBarToggle}
          />

        </Topbar>
        {loginPageActivity && <Login
          onClick={handleLoginActivity}
          width={width}
          handleParentState={this.handleParentState}
        />}
        {signUpPageActivity && <SignUp onClick={handleSignUpActivity} width={width} />}

        <header className="App-header">


          <h1>hi There</h1>

        </header>
      </div>
    );
  }
}

export default App;


// need to write propTypes and default props; 
// and default arguments for functions 