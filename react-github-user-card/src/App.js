import React from 'react';
import { Route } from 'react-router-dom';
import './styling/App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js';
import FollowCard from './components/FollowCard.js';
import SearchForm from './components/SearchForm.js';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    userSearch: ""
  }
  
  componentDidMount() {
    axios
     .get("https://api.github.com/users/aleeshaw")
     .then(res => 
      {
       console.log("user results: ", res)
       this.setState({
        user: res.data
       })
     })
     .catch(error => {
       console.log(error)
     });

    axios
     .get("https://api.github.com/users/aleeshaw/followers")
     .then(res => {
       console.log("follower results:", res.data)
       this.setState({
         followers: res.data
       })
     })
     .catch(error => {
       console.log(error)
     });
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      userSearch: event.target.value
    });
  };

  handleGetUser = event => {
    event.preventDefault();
    console.log(this.state.userSearch);
    axios
     .get(`https://api.github.com/users/${this.state.userSearch}`)
     .then(res => 
      {
       console.log("user results: ", res)
       this.setState({
        user: res.data
       })
     })
     .catch(error => {
       console.log(error)
     });

    axios
     .get(`https://api.github.com/users/${this.state.userSearch}/followers`)
     .then(res => {
       console.log("follower results:", res.data)
       this.setState({
         followers: res.data
       })
     })
     .catch(error => {
       console.log(error)
     });
  };
  //TODO: implement componentDidUpdate();
  render() {
    return (
      <div className="App">
        <h1 className="app-title">GitHub User Card</h1>
        <form>
          <input  
            type="text"
            placeholder="Search for a user!"
            value={this.state.userSearch}
            onChange={this.handleChange}
          />
          <button 
            type="submit" 
            onClick={this.handleGetUser}
          >
            <i class="fas fa-search" />
          </button>
        </form>
        <div className="usercards center">
          <UserCard 
            user={this.state.user}
          />
        </div>
        <section className="followers" >
            <h2>{this.state.user.name}'s Followers:</h2>
            <div className="follow-container">
              {this.state.followers.map(follower => {
                return (
                  <div key={follower.id}>
                    <FollowCard follower={follower}/>
                  </div>
                  
                )
              })};
          </div>
        </section>
      </div> /*App div*/
    );
    }
}

export default App;
