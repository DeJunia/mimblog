import React from 'react'
import Post from './posts'

const Feed = ( {posts} ) => {
  return (
    <>
    {posts.map(post => (
      <Post key={post.id} post={post}/>
    ))}
    </>
  )
}

export default Feed