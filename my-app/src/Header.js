// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
function Header(){
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemmon</h2>
                    <h3>Chicago</h3>
                    <p>Welcome to our family-owned Mediterranean restaurant, where every dish is crafted with love and tradition. Nestled in the heart of chicago, our culinary journey begins with the warmth of a family kitchen, bringing you authentic flavors passed down through generations.</p>
                    <Link to="/reservation">
                    <button aria-label="On Click">Reserve Table</button>
                    </Link>
                </div>
                <div className='bannerimg' > 
                    <img src="/restaurantbanner.jpg" alt="" height="300px" width="300px"></img>
                    
                </div>
            </section>
            {/* Add header content here */}
        </header>
    );
};

export default Header;