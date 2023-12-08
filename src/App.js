
import React from "react"
import './styles/App.css'
import { useState } from "react";
import PostList from "./components/PostList";

import PostForm from "./components/UI/PostForm";




function App() {
const [posts, setPosts] = useState([
{id:1, title:'Javascript 1', body:'Description my post'},
{id:2, title:'Javascript 2', body:'Description my post'},
{id:3, title:'Javascript 3', body:'Description my post'}
])


const createPost= (newPost) =>{
setPosts ([...posts, newPost])
}

  return (

    <div className="App">
      <PostForm create={createPost}/>


      <PostList posts={posts} title='List of post 1'/>  

    </div>
  );
}

export default App;
