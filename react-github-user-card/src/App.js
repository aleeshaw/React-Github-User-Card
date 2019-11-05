import React from 'react';
import logo from './logo.svg';
import './styling/App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js'

class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
     .get("https://api.github.com/users/aleeshaw")
     .then(res => 
      {
       console.log("results: ", res)
       this.setState({
        user: res.data
       });
       console.log("User Name", this.state.user.name);
     })
     .catch(error => {
       console.log(error)
     });
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <UserCard 
          name={this.state.user.name}
          img={this.state.user.avatar_url}
          url={this.state.user.html_url}
        />
      </div>
    );
    }
}

export default App;
