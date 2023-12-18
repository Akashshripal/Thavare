import React from "react";
import logo from '../img/darklogo.jpg'

export default function Navbar(){
    return(
        <>
    <nav class="container-fluid sticky-top navbar navbar-expand-lg navbar-light bg-light navbar-bg ">
  <div class="container">
    <a class="navbar-brand" href="#"><img className="logo-img" src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ingredients" >Ingredients</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#OurStory" >Our Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#WhyUs" >Why Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutus" >About Us</a>
        </li>
        
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      
    </div>
    <form class="d-flex nav-icons list">
        {/* <p><a className="nav-icons-item" href=""><i class="fa-regular fa-heart"></i></a></p> */}
        <input class="form-control me-2 search" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success search" type="submit"><i class="fa-solid fa-magnifying-glass glass-icon"></i></button>
        <p><a className="nav-icons-item" href="#"><i class="fa-solid fa-cart-shopping"></i></a></p>  
        <p><a className="nav-icons-item" href="#"><i class="fa-solid fa-user"></i></a> </p>
        
      </form>
  </div>
</nav>
        
        </>
    )
    }