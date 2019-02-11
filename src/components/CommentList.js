import React from 'react';

const CommentList = () => {
  return (
    <div style={{marginTop: '40px'}} className="ui comments">
      <h5 className="ui dividing header"> 187 Comments</h5>
      <div className="comment">
        <a className="ui circular avatar image">
          <img alt="Ben" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/41611860_10216974441782311_8949307699795853312_n.jpg?_nc_cat=105&_nc_ht=scontent-sjc3-1.xx&oh=8bf9f795e4fdc8e1184d7ecedbd3e636&oe=5CFBA9D0"></img>
        </a>
        <div style={{marginBottom: '20px'}} className="content">
          <a className="author">Ben</a>
          <div className="metadata">
            <span className="date">2 hours ago</span>
          </div>
          <div className="text">Lebron's the goat</div>
          <div className="actions">
            <i style={{margin: '5px 5px 0 0', opacity: '0.5'}} className="ui large icon thumbs up"></i>2
            <i style={{margin: '10px 5px 0 10px', opacity: '0.5'}} className="ui large icon thumbs down"></i>15
            <a style={{marginLeft: '10px', color:'black', opacity: '0.7'}}  className="reply">REPLY</a>
          </div>
        </div>
      </div>

      <div className="comment">
        <a className="avatar ui circular image">
          <img alt="Anthony" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/23659257_942333122588607_527515518850179131_n.jpg?_nc_cat=101&_nc_ht=scontent-sjc3-1.xx&oh=1a1f13ee3f339cc37e34e1965f40874f&oe=5CF3A1E0"></img>
        </a>
        <div className="content">
          <a className="author">Anthony</a>
          <div className="metadata">
            <span className="date">Today at 7:01AM</span>
          </div>
          <div className="text">Greek Freak for 2019 MVP</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>

      </div><div className="comment">
        <a className="avatar ui circular image">
          <img alt="Brennen" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/34919530_10214180694745423_6065996742678020096_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=586354c51eab6169f69acffd518d1077&oe=5CE9A1FD"></img>
        </a>
        <div className="content">
          <a className="author">Brennen</a>
          <div className="metadata">
            <span className="date">Last week at 10:18PM</span>
          </div>
          <div className="text">Kobe > Lebron</div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentList