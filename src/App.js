import React from 'react';

import Header from './components/Header/Header'
import PostList from './components/PostList/PostList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <PostList/>
    </div>
  );
}

export default App;
