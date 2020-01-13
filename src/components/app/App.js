import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import Sidebar from '../sidebar/Sidebar';


const listData = [
    {
        text: 'My profile',
    },
    {
        text: 'News'
    },
    {
        text: 'Notifications'
    },
    {
        text: 'Tasks'
    },
    {
        text: 'Homework'
    },
    {
        text: 'Enlargement'
    },
    {
        text: 'Settings'
    }

];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {activity:false};
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e){
    e.preventDefault();
    const activity = this.state.activity;
    this.setState({activity:!activity});
  }

  render(){
    return (
      <div className="App">
        <Sidebar 
          activity={this.state.activity}
          listData={listData}
        />
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
