import React,{ Component } from 'react';
import Post from '../Post/Post';
import './PostList.css'

class PostList extends Component{
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: ""
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          }
        ]
      },{
        id: 2,
        author: {
          name: "Matheus Barth",
          avatar: ""
        },
        date: "05 Jun 2019",
        content: "This is a lorem impsum dolor",
        comments: [
          {
            id: 1,
            author: {
              name: "Fifi Rodrigues",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: ""
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return(
        <div className="postList">
          {this.state.posts.map(post=><Post key={post.id} data={post}/>)}
        </div>
  )};
}

export default PostList;