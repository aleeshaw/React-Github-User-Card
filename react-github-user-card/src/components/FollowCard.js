import React from 'react'; 
import { Link } from 'react-router-dom';
import '../styling/FollowCard.css';

const FollowCard = props => {
  
  return (
    <div className="follow-card">
      <div>
        <img width="100" src={props.follower.avatar_url} />
      </div>
      <a href={props.follower.html_url}><h3>{props.follower.login}</h3></a>
    </div>
  )
};

export default FollowCard;