
import React from "react"
import './styles/App.css'
import PostItem from "./components/PostItem";
import { useState } from "react";

function App() {
const [posts, setPosts] = useState([
{id:1, title:'Javascript 1', body:'Description my post'},
{id:2, title:'Javascript 2', body:'Description my post'},
{id:3, title:'Javascript 3', body:'Description my post'}])




  return (


    <div className="App">
      <h1 style={{textAlign:'center'}}> List of posts</h1>
      {posts.map(post =>
        <PostItem post ={post} key={post.id} />)}
      


    </div>
  );
}

export default App;
