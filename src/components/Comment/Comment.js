import React from 'react';
import './Comment.css'
function Comment({data, id}){
  return(
    <div key={id} className="comment">
      <span className="userName">{data.author.name}:</span> {data.content}
    </div>
  )
}

export default Comment;