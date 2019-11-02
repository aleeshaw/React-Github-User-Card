import React from 'react';
import logo from './logo.svg';
import './styling/App.css';

class App extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/aleeshaw")
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
    }
}

export default App;
