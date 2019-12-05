import React from 'react';
import Comment from '../Comment/Comment';
import './Post.css';

function Post({data, id}){
  return(
    <div key={id} className="post">
      <div className="wrapper">
        <span className="userName">{data.author.name}</span><br/>
        <span className="date">{data.date}</span>
        <hr/>
      </div>
      <div className="wrapper">
        {data.content}
      </div>
      <div>
        {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
      </div>
    </div>
  )
}

export default Post;