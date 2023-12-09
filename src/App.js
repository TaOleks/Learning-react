
import React, { useMemo } from "react"
import './styles/App.css'
import { useState } from "react";
import PostList from "./components/PostList";

import PostForm from "./components/UI/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'dd 1', body: 'kkkkkkkkk 1' },
    { id: 2, title: 'djj 2', body: 'ddddddddddddd 2' },
    { id: 3, title: 'aa 3', body: 'bbbbbbb 3' }
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState ('')
  


  const sortedPosts = useMemo(() => {
    
    if(selectedSort){
      return [...posts].sort((a,b)=> a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post =>post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort)=>{
    setSelectedSort(sort)
    
    
  }

  return (

    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px'}}/>
      <div>
        <MyInput
        value={searchQuery}
        onChange= {e =>setSearchQuery(e.target.value)}
        placeholder="Search..."
        />
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

      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of post 1' />
        :
        <h1
          style={{ textAlign: 'center' }}> You don't have  posts  at all
        </h1>
      }
    </div>
  );
}

export default App;
