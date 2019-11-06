import React from 'react';
import axios from 'axios';
import UserCard from './UserCard.js';
import FollowCard from './FollowCard.js';

class FollowerPage extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
     .get(`https://api.github.com/users/chrisgins`)
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
     .get("https://api.github.com/users/chrisgins/followers")
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

export default FollowerPage;