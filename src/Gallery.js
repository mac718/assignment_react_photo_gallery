import React from 'react';
import instagramResponse from './photos';
import Panel from './Panel';
import Row from './Row';

class Gallery extends React.Component {
  render() {
    var photoData = instagramResponse.data;
    //console.log(photoData);
    var panels = photoData.map((photo, index) => (
      <Panel user={photo.user.username} createdAt={photo.created_time} likeCount={photo.likes.count} commentCount={photo.comments.count} key={index} />
    ))

    var rows = []
    var row = []
    panels.forEach((panel, index) => {
      if(index % 3 != 0) {
        row.push(panel);
      } else {
        rows.push(row);
        row = [];
        row.push(panel);
      }
    })

    rows = rows.map((row, index) => (
      <Row panel1={row[0]} panel2={row[1]} panel3={row[2]} key={index} />
    ))

    return(
      <div id='gallery'>
        {rows}
      </div>
    )
  }
}

export default Gallery;