const {createCanvas} = require('canvas')
const Chart = require('chart.js/auto')

//Define the controller function to render the dashboard
exports.renderDashboard = (req,res) =>{
    //Create a canvas for the chart
    const canvas = createCanvas(400,400)
    const ctx = canvas.getContext('2d')

    //Define the data for the pie chart
    const data = {
        labels: ['Loan','Savings'],
        datasets: [
            {
                data:[5000,1000],
                backgroundColor:['#FF6384','#36A2EB'],
            },
        ],
    }

    //Generate the pie chart using Chart.js
    new Chart(ctx,{
        type: 'pie',
        data: data,
    })

    //convert  the chart to an image
    const image = canvas.toDataURL()

    res.render('dashboard',{ image: image})
}