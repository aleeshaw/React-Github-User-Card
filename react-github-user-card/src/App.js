import React from 'react';
import logo from './logo.svg';
import './styling/App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js'

class App extends React.Component {
  state = {};

  componentDidMount() {
    axios
     .get("https://api.github.com/users/aleeshaw")
     .then(res => 
      {
       console.log("results: ", res)
       this.setState(
       res.data
      );
       console.log(this.state);
     })
     .catch(error => {
       console.log(error)
     });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
      </div>
    );
    }
}

export default App;
