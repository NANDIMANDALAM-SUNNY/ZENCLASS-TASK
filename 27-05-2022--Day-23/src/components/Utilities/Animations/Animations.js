import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import TopBar from '../../TopBar/TopBar';

const Animations = () => {
  return (
    <>

    <TopBar />
        <div class="container-fluid">

<h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
<p class="mb-4">Bootstrap's default utility classes can be found on the official <a
        href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classes built into Bootstrap's
    framework.</p>

<div class="row">

    <div class="col-lg-6">

        <div class="card position-relative">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <code>.animated--grow-in</code>
                </div>
                <div class="small mb-1">Navbar Dropdown Example:</div>
                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <div className="dropdown ">
                                <a
                                className="  nav-link dropdown-toggle collapsed "
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                
                                >
                                        <span>Dropdown</span>
                                </a>
                                <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
                                <li><a className="dropdown-item" >Action</a></li>
                                <li><a className="dropdown-item" >Another action</a></li>
                                <li><a className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <p class="mb-0 small">Note: This utility animates the CSS transform property,
                    meaning it will override any existing transforms on an element being animated!
                    In this theme, the grow in animation is only being used on dropdowns within the
                    navbar.</p>
            </div>
        </div>

    </div>

    <div class="col-lg-6">

        <div class="card position-relative">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <code>.animated--fade-in</code>
                </div>
                <div class="small mb-1">Navbar Dropdown Example:</div>
                <nav class="navbar navbar-expand navbar-light bg-light mb-4">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <div className="dropdown ">
                                <a
                                className="  nav-link dropdown-toggle collapsed "
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                
                                >
                                        <span>Dropdown</span>
                                </a>
                                <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
                                <li><a className="dropdown-item" >Action</a></li>
                                <li><a className="dropdown-item" >Another action</a></li>
                                <li><a className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div class="small mb-1">Dropdown Button Example:</div>
                <div className="dropdown ">
                                <button
                                className=" btn btn-primary dropdown-toggle nav-link dropdown-toggle collapsed "
                                role="button"
                                id="dropdownMenuLink"
                                data-bs-toggle="dropdown"
                                data-toggle="dropdown"
                                aria-expanded="false"
                                
                                >
                                        <span>Dropdown</span>
                                </button>
                                <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
                                <li><a className="dropdown-item" >Action</a></li>
                                <li><a className="dropdown-item" >Another action</a></li>
                                <li><a className="dropdown-item" >Something else here</a></li>
                                </ul>
                            </div>
                <p class="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                    it will override any existing opacity on an element being animated!</p>
            </div>
        </div>

    </div>

</div>

</div>

    </>
  )
}

export default Animations