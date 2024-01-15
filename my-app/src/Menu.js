// Main.js
import React from 'react';
import Swal from 'sweetalert2';

function Menu(){

  const handleOrderClick = (itemName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to order ${itemName}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Order Placed!',
          text: `Your order for ${itemName} has been placed.`,
          icon: 'success'
        });
      }
    });
  };
  return (
    
  <>
  <div className="weeks-special">
    <h2>This weeks specials</h2>
  </div>
  <div class="menu-container">
      
    <div class="menu-card">
      <img src="/greek salad.jpg" alt="Menu Item 1"></img>
      <div class="menu-content">
        <h3>Greek salad</h3>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <p class="price">$15.99</p>
        <button className="orderbtn" onClick={() => handleOrderClick('Greek Salad')}>Order Now</button>
      </div>
    </div>

    <div class="menu-card">
      <img src="/BRUSHETA.png" alt="Menu Item 2"></img>
      <div class="menu-content">
        <h3>Bruschetta</h3>
        <p>Our famous dish Bruschetta  is made from grilled bread that has been smeared with garlic and  seasoned with salt and olive oil. </p>
        <p class="price">$18.99</p>
        <button className="orderbtn" onClick={() => handleOrderClick('Bruschetta')}>Order Now</button>

      </div>
    </div>

    <div class="menu-card">
      <img src="/lemon dessert.jpg" alt="Menu Item 3"></img>
      <div class="menu-content">
        <h3>Lemon Dessert</h3>
        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <p class="price">$12.99</p>
        <button className="orderbtn" onClick={() => handleOrderClick('Lemon Dessert')}>Order Now</button>
      </div>
    </div>
  </div>
  </>
    
  );
}

export default Menu;
