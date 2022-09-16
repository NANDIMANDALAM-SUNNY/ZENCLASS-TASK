import React from 'react';
import {FaBell,FaDonate,FaGripLines} from 'react-icons/fa'
import {FiSettings} from 'react-icons/fi'
import {BsSearch,BsFillFilePersonFill,BsExclamationTriangleFill} from 'react-icons/bs';
import {AiOutlineMail,AiFillFileText} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {BiLogIn} from 'react-icons/bi'
const TopBar = () => {
  return (
    <>
         <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
    <i class="fa fa-bars"></i>
</button>

<form
    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
    <div class="input-group">
        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
            aria-label="Search" aria-describedby="basic-addon2" />
        <div class="input-group-append">
            <button class="btn btn-primary" type="button">
                <BsSearch />
            </button>
        </div>
    </div>
</form>

<ul class="navbar-nav ml-auto">

    <li class="nav-item dropdown no-arrow d-sm-none">
        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-search fa-fw"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown">
            <form class="form-inline mr-auto w-100 navbar-search">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="button">
                            <i class="fas fa-search fa-sm"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <div className="dropdown">
        <a
          className="  nav-link collapsed"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
                <FaBell />
            <span class="badge badge-danger badge-counter">3+</span>
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar"  style={{width:"290px",marginRight :"40px"}}>
          <li>
            <div class="card shadow ">
                <div class="card-header ">
                    <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                </div>
                <div class="card-body">
                <div className='row'>
                    <div className='col-md-2'>
                            <div class="icon-circle bg-primary">
                                 <AiFillFileText className='text-white'/>
                            </div>
                    </div>
                    <div className='col-md-10'>
                                 <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                    </div>
                </div>
                </div>
            </div>
        </li>
          <li>
                <div class="card-body">
                <div className='row'>
                    <div className='col-md-2'>
                            <div class="icon-circle bg-success">
                                 <FaDonate className='text-white'/>
                            </div>
                    </div>
                    <div className='col-md-10'>
                                 <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                    </div>
                </div>
                </div>
          </li>
          <li>
                <div class="card-body">
                <div className='row'>
                    <div className='col-md-2'>
                            <div class="icon-circle bg-warning">
                                 <BsExclamationTriangleFill className='text-white'/>
                            </div>
                    </div>
                    <div className='col-md-10'>
                                 <div>
                                        <div class="small text-gray-500">December 12, 2019</div>
                                        <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                    </div>
                    </div>
                </div>
                </div>
          </li>
          <li><Link  to="/" class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</Link></li>
        </ul>
      </div>
    </li>

    <li class="nav-item dropdown no-arrow mx-1">
        <div className="dropdown  dropleft">
        <a
          className="  nav-link collapsed  dropleft"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
                 <AiOutlineMail />
            <span class="badge badge-danger badge-counter">7</span>
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar"  style={{width:"290px",marginRight :"40px",marginTop:"25px"}}>
        <li><div class="card-header ">
                    <h6 class="m-0 font-weight-bold text-primary">Message Center</h6>
                </div></li>
          <li>
            <Link class="dropdown-item d-flex align-items-center" to='/'>
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" width="40px" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg" alt="..." />
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! </div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </Link>
        </li>
          <li>
          <Link class="dropdown-item d-flex align-items-center" to='/'>
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle"width="40px" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg" alt="..." />
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! </div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </Link>
          </li>
          <li>
          <Link class="dropdown-item d-flex align-items-center" to='/'>
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" width="40px" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile_1.svg" alt="..." />
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! </div>
                                        <div class="small text-gray-500">Emily Fowler · 58m</div>
                                    </div>
                                </Link>
          </li>
          <li><Link  to="/" class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</Link></li>
        </ul>
      </div>
    </li>

    <div class="topbar-divider d-none d-sm-block"></div>

    <li class="nav-item dropdown no-arrow">
        <div className="dropdown">
        <a
          className="  nav-link collapsed"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
               <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
            <img class="img-profile rounded-circle"
                src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" />
        </a>
        <ul id="collapsePages" class="dropdown-menu collapse ms-2" aria-labelledby="dropdownMenuLink" data-parent="#accordionSidebar">
          <li><Link className="dropdown-item" to='/'><BsFillFilePersonFill /> Profile</Link></li>
          <li><Link className="dropdown-item" to='/'><FiSettings /> Settings</Link></li>
          <li><Link className="dropdown-item" to='/'><FaGripLines/> Activity Log</Link></li>
          <li><Link className="dropdown-item" to='/'> <BiLogIn /> Logout</Link></li>
        </ul>
      </div>
    </li>

</ul>

</nav>
    </>
  )
}

export default TopBar