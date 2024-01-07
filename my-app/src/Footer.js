// Footer.js
import React from 'react';

function Footer () {
  return (
    <footer>

        <img src="/logo2.png" alt=""></img>
        <h1>Doormat navigation</h1>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        </ul>

        <h1>Contact</h1>
        <ul>
        <li>Address:</li>
        <li>Phone no:</li>
        <li>Email:</li>
        </ul>

        <h1>Social Media Links</h1>
        <ul className="social-media-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </footer>
  );
}

export default Footer;
