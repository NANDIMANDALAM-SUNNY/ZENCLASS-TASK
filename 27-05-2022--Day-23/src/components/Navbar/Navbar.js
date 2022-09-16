import React from 'react';
import './Navbar.css'
import { FaTachometerAlt,FaAngleRight,FaRegLaughWink ,FaCog,FaWrench, FaFolder, FaChartArea,FaTable} from "react-icons/fa";
import {BsChevronBarRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";

const Navbar = () => {
  return (
   <>
   <div id='wrapper'>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
<Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
    <div class="sidebar-brand-icon rotate-n-15">
        <FaRegLaughWink className="fontawesomeicon"/>
    </div>
    <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</Link>

<hr class="sidebar-divider my-0" />

<li class="nav-item active">
        <Link class="nav-link" to='/'><FaTachometerAlt className="fontawesomeicon"/>Dashboard</Link>
</li>

<hr class="sidebar-divider" />

<div class="sidebar-heading">
    Interface
</div>

<li class="nav-item">
    <div className="dropdown">
        <a
          className="  nav-link collapsed"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
              <FaCog className="fontawesomeicon"/>
                <span>Components</span>
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
        <span class="collapse-header">Custom Components</span>
          <li><Link className="dropdown-item" to='/buttons'>Buttons</Link></li>
          <li><Link className="dropdown-item" to='/cards'>Cards</Link></li>
        </ul>
      </div>
</li>

<li class="nav-item">
    <div className="dropdown">
        <a
          className="  nav-link collapsed"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
              <FaFolder className="fontawesomeicon"/>
                <span>Utilities</span>
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
        <span class="collapse-header">Custom Utilities</span>
          <li><Link className="dropdown-item" to='/colors'>Colors</Link></li>
          <li><Link className="dropdown-item" to='/borders'>Borders</Link></li>
          <li><Link className="dropdown-item" to='/animations'>Animations</Link></li>
          <li><Link className="dropdown-item" to='/other'>Other</Link></li>
        </ul>
      </div>
</li>

<hr class="sidebar-divider" />

<div class="sidebar-heading">
    Addons
</div>

<li class="nav-item">
    <div className="dropdown">
        <a
          className="  nav-link collapsed"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
              <FaFolder className="fontawesomeicon"/>
                <span>Pages</span>
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
        <span class="collapse-header">Login Screens:</span>
          <li><Link className="dropdown-item" to='/login'>Login</Link></li>
          <li><Link className="dropdown-item" to='/register'>Register</Link></li>
          <li><Link className="dropdown-item" to='/forgotpassword'>Forgot Password</Link></li>
          <div className="collapse-divider"></div>
          <span className="collapse-header">Other Pages:</span>
          <li><Link className="dropdown-item collapse-item" to='/pagenotfound'>404</Link></li>
          <li><Link className="dropdown-item collapse-item" to='/blankpage'>Blank Page</Link></li>

        </ul>
      </div>
</li>

<li class="nav-item">
        <Link class="nav-link" to='charts'><FaChartArea className="fontawesomeicon"/>Charts</Link>
</li>

<li class="nav-item">
        <Link class="nav-link" to='tables'><FaTable className="fontawesomeicon"/>Tables</Link>
</li>
<hr class="sidebar-divider d-none d-md-block" />
<div class="text-center d-none d-md-inline">
    <button class="border-0 text-light p-2" style={{backgroundColor:"#6987DF",borderRadius:"48%"}} ><BsChevronBarRight /> </button>
</div>

<div class="sidebar-card d-none d-lg-flex">
    <img class="sidebar-card-illustration mb-2" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_rocket.svg" alt="..." />
    <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
    <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
</div>

</ul>
</div>



   </>
  )
}

export default Navbar