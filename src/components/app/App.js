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
      () => {  }
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
    const { handleParentState } = this;

    const handleSignUpClick = handlePagesClick({ signUpPageActivity: 'toggle', sideBarActivity: true });
    const handleSideBarToggle = handlePagesClick({ sideBarActivity: 'toggle' });
    const handleLoginClick = handlePagesClick({ loginPageActivity: 'toggle', sideBarActivity: true })

    const { userData } = this.state;
    let { media } = this.props.dimensions;

    const {
      loginPageActivity,
      signUpPageActivity,
      sideBarActivity } = this.state.activity;


    // standartize mainTransparent's onClick function so it works with any component
    // standartize onClick, handleToggle etc. So you understand what function does with its name
    // посмотреть все файлы js, потом css refine(first: _code, signup page laptop, topbar search)

    return (
      <UtilsContext.Provider value={{ handlePagesClick, handleParentState, userData }} >

        <div className="App" style={{ enterStylesHere: '' }}>

          <div className='topBarStackingContext'>
            <Topbar
              onClick={handleSideBarToggle}
              active={sideBarActivity}
              {...{ media }}
            >
              {/* Topbar props.children */}
              { sideBarActivity && <Sidebar
                  media={media}
                  handlers={{
                    handleSignUpClick,
                    handleLoginClick
                  }}
                  onClick={handleSideBarToggle}
                />}

              {
                signUpPageActivity && <SignUpWithFocus onClick={handleSignUpClick} media={media} />
              }
              { loginPageActivity && <Login
                  onClick={handleLoginClick}
                  {...{ media }}
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

// Нужна терминология в каждом компоненте одни и те же переменные должны отвечать схожим вещам