import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to="/">
            e-commerce
        </Link>
        <nav>
            <Link to="/login"><i className='bx bx-user'></i></Link>
            <Link to="/purchases"><i className='bx bx-box'></i></Link>
            <button to=""><i className='bx bx-cart'></i></button>
        </nav>
    </header>
  )
}

export default Header