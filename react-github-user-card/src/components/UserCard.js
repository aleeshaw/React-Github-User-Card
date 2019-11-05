import React from 'react';
import '../styling/UserCard.css';

const UserCard = props => {
  
  return (
    <div className="user-card">
      <div className="img-name-bio">
        <img width="300" src={props.user.avatar_url} />
        <div className="name-bio">
          <a href={props.user.html_url}><h1>{props.user.name}</h1></a>
          <h3>Bio: {props.user.bio}</h3>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <p className="stat-title">Repos:</p> <p className="stat-num">{props.user.public_repos}</p>
        </div>
        <div className="stat">
          <p className="stat-title">Following:</p> <p className="stat-num">{props.user.following}</p>
        </div>
        <div className="stat">
          <p className="stat-title">Followers:</p> <p className="stat-num">{props.user.followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;