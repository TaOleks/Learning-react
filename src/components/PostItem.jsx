import React from 'react'

function PostItem(props) {

  return (
    <div>
        <div className="post">
    <div className="post-content">
      <strong>{props.number}. {props.post.title}</strong>
      <div>
        {props.post.body}
      </div>
    </div>
    <div className="post-btns">
      <button>Delete</button>

    </div>

  </div>
  </div>
  )
}

export default PostItem