import React from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../../TopBar/TopBar'

const Error = () => {
  return (
   <>
   <TopBar />
    <div class="container-fluid">
        <div class="text-center">
            <div class="error mx-auto" data-text="404">404</div>
            <p class="lead text-gray-800 mb-5">Page Not Found</p>
            <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
            {/* <a href="index.html">&larr; Back to Dashboard</a> */}
            <Link to='/dashboard'>Back to Dashboard</Link>
        </div>
    </div>
   </>
  )
}

export default Error