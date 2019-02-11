import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import CommentList from './CommentList';


class App extends React.Component{
  state={videos: [], selectedVideo: null, comments: null};


  componentDidMount(){
    //default search that page is rendered with when it initially loads
    this.onTermSubmit('nba highlights');
  }

  onTermSubmit = async term => {
    //API - VIDEO call made here
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        q: term
      }

    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });

    // console.log(response.data.items);
  }

  //NEED TO LINK THE VIDEO ID TO GET COMMENTS FOR A PARTICULAR VIDEO
  // on videoSelect has access to the currently selected video from its children
  // Try to call getComments inside of onVideoSelect???
  // i think i may need to set an initial state for comments as an empty array and then update it with setState once it retrieves comments
  
  onGetComments = async () => {
    const response = await youtube.get('/commentThreads', {
      params: {
        part: 'string',
        maxResults: 5,
        videoId: "wsZcuVTkSlo"
      }
    });
    console.log(response);

    // this.setState({
    //   comments: //not sure what comments json looks like yet, but it will be comments for selectedVideo
    // });
  }
    
    

  onVideoSelect = video => {
    // console.log('from the app', video)
    this.setState({selectedVideo: video});
    console.log(this.state.selectedVideo);
  } 

  render(){
    return (
      <div style={{margin: '0 40px 0 100px'}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="four wide column">
              <VideoList onVideoSelect={this.onVideoSelect} onGetComments={this.onGetComments} videos={this.state.videos}/>
            </div>
          </div>
        </div>
        <div>
          <CommentList />
        </div>
      </div>
    );
  }
  
}
export default App;