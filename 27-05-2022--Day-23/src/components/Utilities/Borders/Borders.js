import React from 'react'
import TopBar from '../../TopBar/TopBar'

const Borders = () => {
  return (
    <>
    <TopBar />

        <div class="container-fluid">

<h1 class="h3 mb-1 text-gray-800">Border Utilities</h1>
<p class="mb-4">Bootstrap's default utility classes can be found on the official <a
        href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
    below were created to extend this theme past the default utility classes built into Bootstrap's
    framework.</p>

<div class="row">

    <div class="col-lg-6">

        <div class="card mb-4 py-3 border-left-primary">
            <div class="card-body">
                .border-left-primary
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-secondary">
            <div class="card-body">
                .border-left-secondary
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-success">
            <div class="card-body">
                .border-left-success
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-info">
            <div class="card-body">
                .border-left-info
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-warning">
            <div class="card-body">
                .border-left-warning
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-danger">
            <div class="card-body">
                .border-left-danger
            </div>
        </div>

        <div class="card mb-4 py-3 border-left-dark">
            <div class="card-body">
                .border-left-dark
            </div>
        </div>

    </div>

    <div class="col-lg-6">

        <div class="card mb-4 py-3 border-bottom-primary">
            <div class="card-body">
                .border-bottom-primary
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-secondary">
            <div class="card-body">
                .border-bottom-secondary
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-success">
            <div class="card-body">
                .border-bottom-success
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-info">
            <div class="card-body">
                .border-bottom-info
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-warning">
            <div class="card-body">
                .border-bottom-warning
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-danger">
            <div class="card-body">
                .border-bottom-danger
            </div>
        </div>

        <div class="card mb-4 py-3 border-bottom-dark">
            <div class="card-body">
                .border-bottom-dark
            </div>
        </div>

    </div>

</div>

</div>


<a class="scroll-to-top rounded" href="#page-top">
<i class="fas fa-angle-up"></i>
</a>

<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
<button class="close" type="button" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">×</span>
</button>
</div>
<div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
<div class="modal-footer">
<button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
<a class="btn btn-primary" href="login.html">Logout</a>
</div>
</div>
</div>
</div>

    </>
  )
}

export default Borders