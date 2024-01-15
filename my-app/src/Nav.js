// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';


function Nav(){
  return (
    <nav className='navbar'>
        
      <ul>
        <img src="/logo1.png" alt=""></img>
        <li><a href="/">Home</a></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to = "/reservation">Reservation</Link></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><Link to ="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
