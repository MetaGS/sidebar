import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';
import Login from '../login/Login';
import { SignUpWithFocus } from '../signup/Signup';
import Topbar from '../topbar/Topbar';
import MainHeader from '../header/mainHeader'
import Docs from '../pages/Docs';
import Contacts from '../pages/Contacs';


import './App.css';
import { getWindowDimensions } from '../utils/getWindowDimensions';
import UtilsContext from '../AppContext/mainContext';
import { handlePages } from '../utils/togglePages';





class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      activity: {
        sideBarActivity: false,
        signUpPageActivity: false,
        loginPageActivity: false,
      },

      userData: {
        name: '',
        nickName: '',
        email: '',
        photoSrc: '',
        loggedIn: false
      }
    };

  }

  handleParentState = (stateField) => {
    const copy = { ...this.state };
    const field = copy[stateField];

    // returns requested field with function which will concat with state when called
    return [field, (newField) => {
      this.setState({ ...copy, [stateField]: newField },
        () => { console.log(this.state) }
      );
    }];
  }

  makeBodyUnscrollable(pageToggles) {
    const values = Object.values(pageToggles);
    let scroll = values.every(value => {
      return value === false;
    });
    document.body.style.overflow = scroll ? 'unset' : 'hidden';
  }

  render() {

    const handlePagesClick = handlePages.bind(null, this.handleParentState('activity'), this.makeBodyUnscrollable);

    const handleSignUpClick = handlePagesClick({ signUpPageActivity: 'toggle', sideBarActivity: true });
    const handleSideBarToggle = handlePagesClick({ sideBarActivity: 'toggle' });

    const { handleParentState } = this;
    const { userData } = this.state;
    const {
      loginPageActivity,
      signUpPageActivity,
      sideBarActivity } = this.state.activity;
    let width = +this.props.dimensions.width;


   
    return (
      <UtilsContext.Provider value={{ handlePagesClick }} >

        <div className="App" style={{enterStyles:''}}>

          <div className='topBarStackingContext'>
            <Topbar
              onClick={handleSideBarToggle}
              active={sideBarActivity}
              {...{width} } >

              <Sidebar
                {
                ...{ userData, active: sideBarActivity, width }}
                handlers={{
                  handleSignUpClick,
                  handleParentState,
                }}
                onClick={handleSideBarToggle}
                userData={userData}
              />

              {
                signUpPageActivity && <SignUpWithFocus onClick={handleSignUpClick} width={width} />
              }
              {
                loginPageActivity && <Login
                  onClick={handlePagesClick({ loginPageActivity: false, sideBarActivity: true })}
                  {...{ handleParentState, width }}
                />
              }
            </Topbar>
          </div>


          {/* Routes Go here  */}
          <div className="mainStackingContext"> {/* Only for z index, so show planned pages */}
            <Route exact path='/'>
              <MainHeader />
            </Route>

            <Route path='/about'>
              <header className="App-header">
                <h1>hi There</h1>
              </header>
            </Route>

            <Route path='/docs'>
              <Docs />
            </Route>

            <Route path='/contacts'>
              <Contacts />
            </Route>
          </div>
          {/* Routes End*/}

        </div>
      </UtilsContext.Provider>
    );
  }
}

export default getWindowDimensions(App);


// need to write propTypes and default props; 
// and default arguments for functions 
// need to set tabindexes
// use tablerows for data statistics at the end
// use vmins for fonts for better cross browsing calc(16px + 0.5vmin)