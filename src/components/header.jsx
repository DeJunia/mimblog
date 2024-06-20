import React from 'react'
import  Edit  from '../assets/edit.svg'
import { Link } from 'react-router-dom'

const Header = ( {title}) => {

  return (
    <header>
      <h1>{title}</h1>
      <Link to="./post"><img src={Edit} width="20px" height="20px" alt="" /></Link>      
    </header>
  )
}

export default Header