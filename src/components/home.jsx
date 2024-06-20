import React from 'react'
import Feed from './feed'

const Home = ( {posts} ) => {
  return (
    <main className='Home'>
      <div className="banner">
        <p>Create, Edit, Search and Delete Posts</p>
      </div>
      {posts.length ? (
        <Feed posts={posts}/>
      ) : (
        <p style={{marginTop: "2rem"}}>
          No posts To display
        </p>
      )
      }
    </main>
  )
}

export default Home