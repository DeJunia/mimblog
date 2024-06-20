import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../assets/home.svg'
import AboutIcon from '../assets/about.svg'
import SearchIcon from '../assets/search.svg'

const Nav = ( {search, setSearch} ) => {
  return (
    <div className='Nav'>
      <Link to="/">
      <img src={HomeIcon} width="24" height="24" alt="Home icon" />
      </Link>
      <form className='searchForm' onSubmit={(e) => e.preventDefault}>
        <button className='searchBtn' type='submit'>
          <img src={SearchIcon} width="20" height="20" alt="search post button" />
        </button>
        <input type="text"
        placeholder='Search Posts'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <Link to="/about">
      <img src={AboutIcon} width="24" height="24" alt="About icon"/>
      </Link>
    </div>
  )
}

export default Nav