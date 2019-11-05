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
       })
     })
     .catch(error => {
       console.log(error)
     });
    axios
     .get("https://api.github.com/users/aleeshaw/followers")
     .then(res => {
       console.log("followers", res.data)
       this.setState({
         followers: res.data.map(user=> {
          return user.login
        })
       })
       console.log('followers', this.state.followers)
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
          bio={this.state.user.bio}
          url={this.state.user.html_url}
          repos={this.state.user.public_repos}
          following={this.state.user.following}
          followers={this.state.user.followers}
        />
        {/* {this.state.followers.map(follower => (
           <UserCard 
           key={follower.login.id}
           name={follower.login.name}
           img={follower.avatar_url}
           bio={follower.bio}
           url={follower.html_url}
           repos={follower.public_repos}
           following={follower.following}
           followers={follower.followers}
         />
        ))} */}
      </div>
    );
    }
}

export default App;
