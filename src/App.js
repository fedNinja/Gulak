import React, { Component } from 'react'
import NavBar from './components/Navbar'
import MainContainer from './components/Main'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <NavBar></NavBar>
        </div>
        <MainContainer/>
      </div>
    );
  }
}

export default App;
