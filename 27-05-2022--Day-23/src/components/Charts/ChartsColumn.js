import React from 'react'
import {areaChart,doughnut,barData} from './ChartsData'
import { Line,Doughnut,Bar } from "react-chartjs-2";
import 'chart.js/auto';
import { Chart,ArcElement }  from 'react-chartjs-2'


const ChartsColumn = () => {
    const options = {
        legend: {
          display: false,
          position: "right"
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };
  return (
   <>

<div class="row">

<div class="col-xl-8 col-lg-7">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
        </div>
        <div class="card-body">
            <div class="chart-area">
                {/* <canvas id="myAreaChart"></canvas> */}
                <Line data={areaChart} />
            </div>
            <hr />
            Styling for the area chart can be found in the
            <code>/js/demo/chart-area-demo.js</code> file.
        </div>
    </div>



</div>

<div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
        </div>
        <div class="card-body">
            <div class="chart-pie pt-4" style={{width: '90%', height: '80%'}}>
                {/* <canvas id="myPieChart"></canvas> */}
                <Doughnut data={doughnut} options={options}/>
            </div>
            <hr />
            Styling for the donut chart can be found in the
            <code>/js/demo/chart-pie-demo.js</code> file.
        </div>
    </div>
</div>
</div>
   </>
  )
}

export default ChartsColumn