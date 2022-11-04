import React from 'react'

function Main() {
  return (
    <div>
        <ul id="navbar">
            <li><a class="active" href="index.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li id="lg-bag"><a href="cart.html"><i class='bx bx-shopping-bag'></i></a></li>
            <a href="#" id="close"><i  class='bx bx-x' ></i></a>
        </ul>
    </div>
  )
}

export default Main