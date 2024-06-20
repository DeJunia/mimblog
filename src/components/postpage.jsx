import React from 'react'
import {useParams, Link} from 'react-router-dom'
import DeleteIcon from '../assets/delete.svg'
import backIcon from '../assets/left.svg'

const PostPage = ( {posts, handleDelete} ) => {

  const { id } = useParams();

  const post = posts.find(post => (post.id).toString() === (id));  

  return (
    <main className="postPage">
      <div className="back">
        <Link to="/"><img src={backIcon} width={24} height={24} alt="" /><p>Back</p></Link></div>
      <article className="post" style={{marginTop: "2rem"}}>
        {
          post &&
            <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p>
              {post.body}
            </p>
            <button onClick={() => handleDelete(post.id)} className='deleteBtn'>
              
              <img src={DeleteIcon} alt="" width={24} height={24} /><span className="text">Delete Post</span>
              
            </button>
            <button className='editBtn'><Link to={`/edit/${post.id}`}>Edit Post</Link></button>
            </>
        }{
          !post &&
            <>
              <h2>Post not found</h2>
              <p>Well... That's disappointing</p>
              <p><Link to="/">
              Visit our Homepage</Link></p>
            </>
        }
      </article>
    </main>
  )
}

export default PostPage