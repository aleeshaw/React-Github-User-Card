import React from 'react';

const UserCard = props => {
  
  return (
    <div className="user-card">
      <div className="img-name-bio">
      <img width="300" src={props.user.avatar_url} />
      <a href={props.user.html_url}><h1>{props.user.name}</h1></a>
      <h3>Bio: {props.user.bio}</h3>
      </div>
      <div className="stats">
        <div className="stat">
          Repos: <p>{props.user.public_repos}</p>
        </div>
        <div className="stat">
          Following: <p>{props.user.following}</p>
        </div>
        <div className="stat">
          Followers: <p>{props.user.followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;