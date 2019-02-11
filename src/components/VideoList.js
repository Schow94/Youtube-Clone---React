import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect, onGetComments}) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem 
        //need access to video.id.videoId to get comments for that video
        key={video.id.videoId}
        onVideoSelect={onVideoSelect} 
        video={video}
        // onGetComments={onGetComments}
      />
    );
  });

  return (
    <div style={{width: '400px'}} className="ui relaxed divided list">
      {renderedList}
    </div>
  );
}


export default VideoList;