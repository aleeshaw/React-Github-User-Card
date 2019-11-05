import React from 'react';

const UserCard = props => {
  return (
    <div className="user-card">
      <div className="img-name-bio">
      <img width="300" src={props.img} />
      <a href={props.url}><h1>{props.name}</h1></a>
      <h3>Bio: {props.bio}</h3>
      </div>
      <div className="stats">
        <div className="stat">
          Repos: <p>{props.repos}</p>
        </div>
        <div className="stat">
          Following: <p>{props.following}</p>
        </div>
        <div className="stat">
          Followers: <p>{props.followers}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;