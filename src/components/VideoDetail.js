import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return (
      <div>
        Loading...
      </div>
      
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;

  return(
    <div>
      <div className="ui embed">
        <iframe title="video title" src={videoSrc} allow='autoplay'/>
      </div>
      <div  style={{marginTop: '30px'}}>
        <h3 className="ui header">{video.snippet.title}</h3>
        545K views
        <hr style={{opacity: '0.2'}}></hr>

        <div style={{marginTop: '15px'}}>
          <h4>{video.snippet.channelTitle}</h4>
          Published on {video.snippet.publishedAt}
        <p style={{marginTop:25}}>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoDetail;