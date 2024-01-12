import React from 'react';
import "./style.css"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
    <div className='logo'>Logo</div>
    <div className='header-right'>
      <Link to={"/"} >Home</Link>
      <Link to={'/videos'}>Videos</Link>
    </div>
   </div>
  )
}

export default Header