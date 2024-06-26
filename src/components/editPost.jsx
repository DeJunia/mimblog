import React, { useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const EditPost = ( {posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle}
) => {

  const { id } = useParams();

  const post = posts.find(post => (post.id).toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main  className='NewPost'>
      {editTitle && 
      <>
        <h2>Edit This Post</h2>
        <form onSubmit={(e) => e.preventDefault()} className="newPostForm">
          <label htmlFor='postTitle'>Edit Title:</label>
          <input type="text"
          id='postTitle'
          required
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)} />

          <label htmlFor="postBody">Edit Post:</label>

          <textarea 
          id="postBody"
          value={editBody} 
          onChange={(e) => setEditBody(e.target.value)}
          />

          <button type='submit' className='submitBtn' onClick={() => handleEdit(post.id)}>
            Edit</button>
      </form> 
      </>
      }{!editTitle &&
        <>
        <h2>Eidt Post not found</h2>
        <p>Well... That's disappointing</p>
        <p><Link to="/">
        Visit our Homepage</Link></p>
      </>
      }
    </main>
  )
}

export default EditPost