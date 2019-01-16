import React from 'react';
//import instagramResponse from './photos';


const Panel = ({user, createdAt, likeCount, commentCount}) => {
  //let photoData = instagramResponse.data[0];
  return (
    <div className = 'panel'> 
      <img src={require('./profile_pic.jpg')} width='100%' alt='profile_pic' />
      <ul className="list-group">
        <li className="list-group-item"><strong>User:</strong> {user} </li>
        <li className="list-group-item"><strong>Created at:</strong> {createdAt}</li>
        <li className="list-group-item"><strong>Caption:</strong> caption</li>
        <li className="list-group-item"><strong>Like count:</strong> {likeCount}</li>
        <li className="list-group-item"><strong>Comment count:</strong> {commentCount}</li>
      </ul>
    </div>
  );
}

export default Panel;