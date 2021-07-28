import React from 'react';
import PostForm from './API/PostForm';
import PostList from './API/PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <PostForm/>
      <PostList/>
    </div>
  );
}

export default App;
