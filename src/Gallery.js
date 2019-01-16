import React from 'react';
import instagramResponse from './photos';
import Panel from './Panel';

class Gallery extends React.Component {
  render() {
    const photoData = instagramResponse.data;
    //console.log(photoData);
    const panels = photoData.map((photo, index) => (
      <Panel user={photo.user.username} createdAt={photo.created_time} likeCount={photo.likes.count} commentCount={photo.comments.count} key={index} />
    ))

    return(
      <div id='gallery'>
        {panels}
      </div>
    )
  }
}

export default Gallery;