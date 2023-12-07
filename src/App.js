
import React from "react"
import './styles/App.css'
import PostItem from "./components/PostItem";
import { useState } from "react";
import PostList from "./components/PostList";

function App() {
const [posts, setPosts] = useState([
{id:1, title:'Javascript 1', body:'Description my post'},
{id:2, title:'Javascript 2', body:'Description my post'},
{id:3, title:'Javascript 3', body:'Description my post'}
])
const [posts2, setPosts2] = useState([
  {id:1, title:'Java 1', body:'Description Java post'},
  {id:2, title:'Java 2', body:'Description Java post'},
  {id:3, title:'Java 3', body:'Description Java post'}
  ])
  const [posts3, setPosts3] = useState([
    {id:1, title:'Pyton 1', body:'Description Pyton post'},
    {id:2, title:'Pyton 2', body:'Description Pyton post'},
    {id:3, title:'Pyton 3', body:'Description Pyton post'}
    ])




  return (


    <div className="App">

    <PostList posts={posts} title='List of post 1'/>  

    <PostList posts={posts2} title='List of post 2'/>  
    
    <PostList posts={posts3} title='List of post 3'/>  

    
    </div>
  );
}

export default App;
