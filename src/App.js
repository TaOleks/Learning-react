
import React from "react"
import './styles/App.css'
import { useState } from "react";
import PostList from "./components/PostList";

import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";




function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'dddddddddd 1', body: 'kkkkkkkkk 1' },
    { id: 2, title: 'jjjjjjjj 2', body: 'ddddddddddddd 2' },
    { id: 3, title: 'aaaaaaaaaa 3', body: 'bbbbbbb 3' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort)=>{
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    
  }

  return (

    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}}/>
      <div>
        <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Filter at'
        options={[
          { value: 'title', name:'By name'},
          { value: 'body', name:'By description'}
        ]}
        />
      </div>

      {posts.length
        ?
        <PostList remove={removePost} posts={posts} title='List of post 1' />
        :
        <h1
          style={{ textAlign: 'center' }}> You don't have  posts  at all
        </h1>
      }
    </div>
  );
}

export default App;
