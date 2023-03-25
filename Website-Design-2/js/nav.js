const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/background.png" class="Brand-Logo" alt="">
    <div class="nav-items">
        <div class="search">
            <form action="search.html" method="get" class="search">
            <input type="text" class="search-box" placeholder="Product name, Category name, etc.">
            <button class="search-btn"><b>Search</b></button>
        </div>
        <button onclick="window.location.href='login.html'"class="login-btn"><b>Login</b></button>
        <i class="fa-solid fa-cart-shopping"<button onclick="window.location.href='cart.html'"class="fa-solid fa-cart-shopping"></button></i>
    </div>
</div>
<ul class="links-container">
    <li><a href="index.html" class="link">Home</a></li>
    <li><a href="product.html" class="link">All Products</a></li>
    <li><a href="#" class="link">Women
            <i class="fas fa-caret-down"></i>
        </a>
        <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Skirts</a></li>
        </ul>
    </li>
    <li><a href="#" class="link">Men
            <i class="fas fa-caret-down"></i>
        </a>
        <ul>
            <li><a href="#">All</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Pants</a></li>
            <li><a href="#">Skirts</a></li>
        </ul>
    </li>
    <li><a href="#" class="link">Kids</a></li>
    <li><a href="contact.html" class="link">Contact</a></li>
</ul>
    `;
}

createNav();

//convert this code to react

import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <img src="img/background.png" className="Brand-Logo" alt="" />
            <div className="nav-items">
                <div className="search">
                    <form action="search.html" method="get" className="search">
                        <input type="text" className="search-box" placeholder="Product name, Category name, etc." />
                        <button className="search-btn"><b>Search</b></button>
                    </form>
                </div>
                <button onClick={() => window.location.href = 'login.html'} className="login-btn"><b>Login</b></button>
                <i className="fa-solid fa-cart-shopping"><button onClick={() => window.location.href = 'cart.html'} className="fa-solid fa-cart-shopping"></button></i>
            </div>
        </div>
    );
}

export default Nav;