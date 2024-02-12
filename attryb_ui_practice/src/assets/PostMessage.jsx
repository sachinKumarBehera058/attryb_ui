import React from 'react';
import './PostMessage.css';

const Postmessage = ({ tweets }) => {
  return (
    <div className='bada-daba'>
      <div className='tweet-box'>
        <h2>Recent Tweets</h2><hr />
        <div className='tweet-msg'>
          {tweets.map((tweet, index) => (
            <div className='msg-card' key={index}>
              <img src="https://cdn.imgchest.com/files/myd5czpld34.png" alt="PROFILE.PIC" />
              <div className='pmg'>
              <p className='post-msg'>{tweet.content}</p>
              <p className='time'>{tweet.timestamp}</p>
              </div>
              {/* <hr /> */}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Postmessage;
