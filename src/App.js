
import React, { useMemo } from "react"
import './styles/App.css'
import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/UI/PostForm";
import PostFilter from "./components/UI/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";



function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'dd 1', body: 'kkkkkkkkk 1' },
    { id: 2, title: 'djj 2', body: 'ddddddddddddd 2' },
    { id: 3, title: 'aa 3', body: 'bbbbbbb 3' }
  ])

  const [filter, setFilter] = useState({sort:'', query:''})
  


  const sortedPosts = useMemo(() => {
    console.log('memo')
    if(filter.sort){
      return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() =>{
    return sortedPosts.filter(post =>post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

 
  return (

    <div className="App">
      <MyModal visible = {true}>
        
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px  0'}}/>
      <PostFilter 
      filter = {filter} 
      setFilter={setFilter}/>

      
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of post 1' />
        
    </div>
  );
}

export default App;
