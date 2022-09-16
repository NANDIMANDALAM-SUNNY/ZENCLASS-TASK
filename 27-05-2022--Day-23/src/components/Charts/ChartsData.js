export const areaChart = {
    labels: ["Jan","Feb", "Mar", "April", "May","Jun", "Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: "Monthly Expenditure",
        data: [0,10000, 5000, 15000, 10000, 20000,15000,25000,20000,30000,25000, 40000],
        fill: false,
        lineTension: 0.3, 
        borderColor: "#4E73DF",
      }
    ]
  };


  export const doughnut = {
    responsive: true,
    labels: ["Direct","Referral","Social"],
    datasets: [
      {
        data: [55, 30, 15],
        backgroundColor: ['#4E73DF','#1CC88A','#36B9CC'],
      }
    ]
  };


  export const barData = {
    labels: ["Jan","Feb", "Mar", "April", "May","Jun"],
    datasets: [{
        label: "Monthly Expenditure",
        barPercentage: 0.5,
        barThickness: 40,
        maxBarThickness: 18,
        minBarLength: 2,
        data: [4215, 5312, 6251, 7841, 9821, 14984],
        backgroundColor:["#4E73DF"]
    }]
};
  