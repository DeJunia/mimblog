import React from 'react'

const NewPost = ( {postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main  className='NewPost'>
      <h2>Write a Post</h2>
      <form onSubmit={handleSubmit} className="newPostForm">
        <label htmlFor='postTitle'>Title:</label>
        <input type="text"
        id='postTitle'
        required
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)} />

        <label htmlFor="postBody">Post:</label>

        <textarea 
        id="postBody"
        value={postBody} 
        onChange={(e) => setPostBody(e.target.value)}
        />

        <button type='submit' className='submitBtn'>
          Submit</button>
      </form> 
      
    </main>
  )
}

export default NewPost