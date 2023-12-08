
import React from "react"
import './styles/App.css'
// import { useRef } from "react";
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

const [title, setTitle] = useState('')
const [body, setBody] =useState('')

// const bodyInputRef = useRef()

const addNewPost = (e) =>{
  e.preventDefault()
  const newPost = {
    id: Date.now(),
    title,
    body
  }

 setPosts([...posts, newPost])
 setTitle('')
 setBody('')
 console.log(newPost)
// console.log(bodyInputRef.current.value)

}

  return (


    <div className="App">

      <form>
        {/* Controllable component */}
        <MyInput
        value={title}
        onChange={e => setTitle(e.target.value) }
         type='text'
          placeholder='Post name' />
           <MyInput
        value={body}
        onChange={e => setBody(e.target.value) }
         type='text'
          placeholder='Post description' />


          {/* Don't controllable component */}
        {/* <MyInput
        ref={bodyInputRef}
         type='text' 
         placeholder='Post description' /> */}
        <MyButton onClick={addNewPost} >Create post</MyButton>

        {/* <input
        ref={bodyInputRef}
        /> */}
      </form>

    <PostList posts={posts} title='List of post 1'/>  

   
    
    </div>
  );
}

export default App;
