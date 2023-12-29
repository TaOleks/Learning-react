import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../API/PostService'
import Loader from '../components/UI/loader/Loader'
function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fetchPostById, isLoading, error] = useFetching(async(id) =>{
        const response =await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isCommentLoading, comError] = useFetching(async(id) =>{
        const response =await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() =>{
      fetchPostById(params.id)
      fetchComments(params.id)

    },[])
   
  return (
    <div>
        <h1>You opened page of post with ID = {params.id}</h1>
        {isLoading
        ? <Loader/>
        :  <div>{post.id}. {post.title}</div>
        }
        <h1>
            Comments
        </h1>
        { isCommentLoading
        ?<Loader/>
        :<div>
            {comments.map( comm=>
                <div style={{marginTop: 15}}>
                    <h5>{comm.email}</h5>
                    <div>{comm.body}</div>
                </div>
            )}
        </div>

        }
       
    </div>
  )
}

export default PostIdPage