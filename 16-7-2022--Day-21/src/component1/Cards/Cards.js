import React from 'react';
import { AiOutlineCheck,AiOutlineClose } from "react-icons/ai";


const Cards = (props) => {
  console.log(props)
  return (
    
    <>
        <div class="col-lg-4 pb-5 ">
        <div class="card  p-3 m-5 mb-lg-0">
          <div class="card-body ">
            <h5 class="card-title  text-muted text-uppercase text-center">{props.state}</h5>
            <h6 class="card-price text-center"><span className='price_number font'>${props.price}</span><span class="period">/month</span></h6>
            <ul class="fa-ul">
              <li className={props.id==0?"":"font-weight-bold h6"}><span class="fa-li"><AiOutlineCheck /></span>{props.users}</li>
              <li className='h6'><span class="fa-li"><AiOutlineCheck /> </span>{props.storage}GB Storage</li>
              <li className='h6'><span class="fa-li"><AiOutlineCheck /></span>Unlimited Public Projects</li>
              <li className='h6'><span class="fa-li"><AiOutlineCheck /></span>Community Access</li>
              <li class= {props.id==0?"text-muted h6":"h6"}><span class="fa-li">{props.id==0?<AiOutlineClose />:<AiOutlineCheck />}</span>Unlimited Private Projects</li> 
              <li class= {props.id==0 ? "text-muted h6":"h6"}><span class="fa-li">{props.id==0?<AiOutlineClose />:<AiOutlineCheck />}</span>Dedicated Phone Support</li>
              <li class= {props.id==1 || props.id==2?"h6":"text-muted h6"}><span class="fa-li">{props.id==1 || props.id==2?<AiOutlineCheck />:<AiOutlineClose />}</span>{props.domain }</li>
              <li class= {props.id==2?"h6":"text-muted h6"}><span class="fa-li">{props.id==2?<AiOutlineCheck />:<AiOutlineClose />}</span>Monthly Status Reports</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Cards