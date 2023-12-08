
import React from "react"
import './styles/App.css'

import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton ";
import MyInput from './components/UI/input/MyInput'

function App() {
const [posts, setPosts] = useState([
{id:1, title:'Javascript 1', body:'Description my post'},
{id:2, title:'Javascript 2', body:'Description my post'},
{id:3, title:'Javascript 3', body:'Description my post'}
])





  return (


    <div className="App">

      <form>
        <MyInput type='text' placeholder='Post name' />
        <MyInput type='text' placeholder='Post describtion' />
        <MyButton disabled >Create post</MyButton>
      </form>

    <PostList posts={posts} title='List of post 1'/>  

   
    
    </div>
  );
}

export default App;
