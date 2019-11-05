import React from 'react';
import logo from './logo.svg';
import './styling/App.css';
import axios from 'axios';
import UserCard from './components/UserCard.js'

class App extends React.Component {
  state = {
    user: {},
    followList: [],
    followData: []
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
       console.log(res.data)
       this.setState({
         followList: res.data.map(user=> {
          return user.login
        })
       })
       console.log('follow list', this.state.followList)

      //  this.state.followList.map(follower => {
      //   axios
      //    .get(`https://api.github.com/users/${follower}`)
      //    .then(res => {
      //      //console.log("follow data", res.data)
      //      this.setState({
      //        followData: res.data
      //      })
      //      console.log('data test', this.state.followData)
      //    })
      //    .catch(error => {
      //      console.log(error)
      //    });
      //})
     })
     .catch(error => {
       console.log(error)
     });
     
     
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub User Card</h1>
        <div className="usercards">
          <UserCard 
            name={this.state.user.name}
            img={this.state.user.avatar_url}
            bio={this.state.user.bio}
            url={this.state.user.html_url}
            repos={this.state.user.public_repos}
            following={this.state.user.following}
            followers={this.state.user.followers}
          />
          {this.state.followList.map(follower => {
            axios.get(`https://api.github.com/users/${follower}`)
            .then(res => {
              console.log(res.data)
              
            })
            .catch(error => {
              console.log(error)
            })
            return (
              <div>test</div>
            )
          })}
        </div>
      </div>
    );
    }
}

export default App;
