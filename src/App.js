import React, { Component } from 'react'
import NavBar from './components/Navbar'
import MainContainer from './components/Main'
import './App.css'
import fetchJSON from './actions/fetchJSON'

class App extends Component {

  state = {
    loading:false,
    users:[]
  }

  componentDidMount(){
    this.setState({loading:true});
  {/*const data = await this.props.fetchUsers();*/}
  fetchJSON('http://localhost:8080/api/users', data => {
    console.log(data);
  })

  {/*var request = new Request('http://localhost:8080/api/users', {
    method: 'GET',
    mode: 'cors',
    headers: new Headers({
        'Content-Type': 'application/json'
    })
});

// Now use it!
fetch(request).then(function(data) { /* handle response  
     console.log(data);
});*/}


 {/* this.setState({loading:false, users:data.users});*/}
}

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
