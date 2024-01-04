import React, { useEffect, useRef, useState } from "react"

import PostList from "../components/PostList";
import PostForm from "../components/UI/PostForm";
import PostFilter from "../components/UI/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton ";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastElement = useRef()
  
  
  

  const [fetchPosts, isPostLoading, postError] = useFetching ( async(limit, page)=>{
    const response = await  PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostLoading, ()=>{
    setPage(page + 1)
  } )
 
  useEffect(() =>{
    fetchPosts(limit, page)
  }, [page, limit])
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  const changePage = (page) =>{
    setPage(page)
    fetchPosts(limit, page)
    
  }
  
  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POST</button>
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create user
      </MyButton>
      <MyModal visible = {modal} setVisible={setModal}>
        
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px  0'}}/>
      <PostFilter 
      filter = {filter} 
      setFilter={setFilter}/>

      <MySelect 
        value = {limit}
        onChange ={value =>setLimit(value)}
        defaultValue='Emount  elements on a page'
        options = {[
          {value: 5, name:'5'},
          {value: 10, name:'10'},
          {value: 25, name:'25'},
          {value: -1, name:'Show all posts'},
        ]}
     />

      {postError && 
      <h1>Mistake happened ${postError}</h1>
      }

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='List of posts about JS' />
      <div ref={lastElement} style ={{height:20, background:'red'}}></div>

         {isPostLoading &&
        <div style ={{display:'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
         }
        
         
 
        <Pagination
         page={page} 
         totalPages={totalPages}
         changePage={changePage} 
         
         /> 

    </div>
  );
}
export default Posts;