import './App.css'
import React, { useState } from 'react';
import Navbar from './assets/Navbar';
import Postmessage from './assets/PostMessage';

function App() {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    const timestamp = new Date().toLocaleString(); 
    setTweets([{ content: newTweet, timestamp }, ...tweets]);
  };

  return (
    <>
      <Navbar addTweet={addTweet} />
      <Postmessage tweets={tweets} />
    </>
  );
}

export default App;


