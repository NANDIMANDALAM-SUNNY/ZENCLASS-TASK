import React from 'react'
import TopBar from '../TopBar/TopBar'
import {areaChart,doughnut,barData} from './ChartsData'
import { Line,Doughnut,Bar } from "react-chartjs-2";
import 'chart.js/auto';
import { Chart,ArcElement } from 'react-chartjs-2'
import ChartsColumn from './ChartsColumn';




const Charts = () => {
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
    console.log(barData)
  return (
    <>
         <div id="content-wrapper" class="d-flex flex-column">

<div id="content">
   <TopBar />

    <div class="container-fluid">

        <h1 class="h3 mb-2 text-gray-800">Charts</h1>
        <p class="mb-4">Chart.js is a third party plugin that is used to generate the charts in this theme.
            The charts below have been customized - for further customization options, please visit the <a
                target="_blank" href="https://www.chartjs.org/docs/latest/">official Chart.js
                documentation</a>.</p>


    <ChartsColumn />
        <div class="row">

            <div class="col-xl-8 col-lg-7">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-doug">Bar Chart</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-bar">
                            {/* <canvas id="myBarChart"></canvas> */} 
                            <Bar data={barData}/>
                        </div>
                        <hr />
                        Styling for the bar chart can be found in the
                        <code>/js/demo/chart-bar-demo.js</code> file.
                    </div>
                </div>

            </div>
        </div>

    </div>

</div>

<footer class="sticky-footer bg-white">
    <div class="container my-auto">
        <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
        </div>
    </div>
</footer>

</div>

    </>
  )
}

export default Charts