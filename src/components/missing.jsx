import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'
    style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h2>404: Page not found</h2>
      <p><Link to='/'>Visit our Homepage</Link></p>
    </main>
  )
}

export default Missing