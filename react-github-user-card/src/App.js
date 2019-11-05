import React from 'react';
import logo from './logo.svg';
import './styling/App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js';
import FollowCard from './components/FollowCard.js';

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

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <div className="usercards center">
          <UserCard 
            user={this.state.user}
          />
        </div>
        <div className="followers">
          <h2>{this.state.user.name}'s Followers:</h2>
            {this.state.followers.map(follower => {
              return (
                
                <div key={follower.id}>
                  <FollowCard follower={follower}/>
                </div>
                
              )
            }
              
            )}
        </div>
      </div>
    );
    }
}

export default App;
