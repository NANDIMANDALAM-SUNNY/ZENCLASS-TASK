import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core";
import "bootstrap";
import TopBar from '../TopBar/TopBar';
import ChartsColumn from '../Charts/ChartsColumn';


const Dashboard = () => {
  


  return (
   <>
       <TopBar />
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <button href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Generate Report</button>
                    </div>
    <ChartsColumn />
  
     <div className='row'>
        <div className='col-md-6'>
        <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div class="card-body">
            
            <hr />
            <h4 class="small font-weight-bold">Server Migration <span class="float-right">20%</span></h4>
            {/* <div class="mb-1 ">Server Migration</div> */}
            <div class="progress mb-4">
  <div class="progress-bar bg-danger" role="progressbar" aria-label="Basic example" style={{width:"20%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<h4 class="small font-weight-bold">Sales Tracking <span class="float-right">40%</span></h4>
            <div class="progress mb-4">
  <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example" style={{width:"40%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<h4 class="small font-weight-bold">Customer Database <span class="float-right">60%</span></h4>
            <div class="progress mb-4">
  <div class="progress-bar bg-primary" role="progressbar" aria-label="Basic example" style={{width:"60%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<h4 class="small font-weight-bold">Payout Details <span class="float-right">80%</span></h4>
            <div class="progress mb-4">
  <div class="progress-bar bg-info" role="progressbar" aria-label="Basic example" style={{width:"80%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>

<h4 class="small font-weight-bold">Account Setup <span class="float-right">complete!</span></h4>
            <div class="progress mb-4">
  <div class="progress-bar bg-success" role="progressbar" aria-label="Basic example" style={{width:"100%"}}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>



        </div>
    </div>
    <div className='row'>
      <div className='col-lg-6 mb-4'>
      <div class="card bg-primary text-white shadow">
          <div class="card-body">
               Primary
           <div class="text-white-50 small">#4e73df</div>
        </div>
      </div>
      </div>

      <div className='col-lg-6 mb-4'>
      <div class="card bg-success text-white shadow">
          <div class="card-body">
          Success
           <div class="text-white-50 small">#1cc88a</div>
        </div>
      </div>
      </div>

      <div className='col-lg-6 mb-4'>
      <div class="card bg-info text-white shadow">
          <div class="card-body">
          Info
           <div class="text-white-50 small">#36b9cc</div>
        </div>
      </div>
      </div>


      <div className='col-lg-6 mb-4'>
      <div class="card bg-warning text-white shadow">
          <div class="card-body">
          Warning
           <div class="text-white-50 small">#f6c23e</div>
        </div>
      </div>
      </div>



      <div className='col-lg-6 mb-4'>
      <div class="card bg-danger text-white shadow">
          <div class="card-body">
          Danger
           <div class="text-white-50 small">#e74a3b</div>
        </div>
      </div>
      </div>


      <div className='col-lg-6 mb-4'>
      <div class="card bg-secondary text-white shadow">
          <div class="card-body">
          Secondary
           <div class="text-white-50 small">#858796</div>
        </div>
      </div>
      </div>


      <div className='col-lg-6 mb-4'>
      <div class="card bg-light text-dark shadow">
          <div class="card-body">
          Light
           <div class="text-dark-50 small">#f8f9fc</div>
        </div>
      </div>
      </div>



      <div className='col-lg-6 mb-4'>
      <div class="card bg-dark text-white shadow">
          <div class="card-body">
          Dark
           <div class="text-white-50 small">#5a5c69</div>
        </div>
      </div>
      </div>



     </div>
        </div>
        <div className='col-md-6'>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
            </div>
            <div class="card-body">
            <div class="text-center">
            <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src="https://www.evolutionco.com/assets/admin/img/undraw_posting_photo.svg" alt="..." />
                                    </div>
            Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
            </div>
        </div>

        <div class="card shadow mb-4">
            <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
            </div>
            <div class="card-body">
            SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.

Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.
            </div>
        </div>
        </div>
     </div>

    
   </>
  )
}

export default Dashboard
