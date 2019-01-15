import React from 'react';
import instagramResponse from './photos';


const Panel = () => {
  let photoData = instagramResponse.data[0];
  return (
    <div className = 'panel'> 
      <img src={photoData.caption.link} />
      <ul className="list-group">
        <li className="list-group-item">User: {photoData.caption.from.username}</li>
        <li className="list-group-item">Created at: {photoData.caption.created_time}</li>
        <li className="list-group-item">Caption: {photoData.caption.text}</li>
        <li className="list-group-item">Like count: {photoData.likes.count}</li>
        <li className="list-group-item">Comment count: {photoData.comments.count}</li>
      </ul>
    </div>
  );
}

export default Panel;