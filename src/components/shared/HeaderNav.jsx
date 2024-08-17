import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderNav.css'
const body = document.querySelector('body');

const HeaderNav = () => {

  const handleDark = () => {
    body.classList.toggle('dark')
  }

  return (
    <div className='headerNav'>
        <h1> <Link to='/'>STORE</Link></h1>
        <nav>
          <ul className='headerNav__list'>
            <button onClick={handleDark}>Dark Mode</button>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/product'>Products</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/purchase'>Purchase</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav;