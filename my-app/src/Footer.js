// Footer.js
import React from 'react';

function Footer () {
  return (
    <footer>
        <section>
        <img src="/logo2.png" alt=""></img>
        
        <ul>
        <h1>Doormat navigation</h1>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservation">Reservation</a></li>
        <li><a href="/orderonline">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        </ul>

        
        <ul>
        <h1>Contact</h1>
        <li>Address:Chicago</li>
        <li>Phone no:98532132309</li>
        <li>Email:littlelemon@g.com</li>
        </ul>

        
        <ul className="social-media-links">
        <h1>Social Media Links</h1>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
        </section>
    </footer>
  );
}

export default Footer;
