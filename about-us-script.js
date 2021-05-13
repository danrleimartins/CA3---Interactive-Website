//Customer Survey Chart using Chart.js framework

let myChart = $('#myChart')[0].getContext('2d');

//Creating new chart object
let dataChart = new Chart(myChart, {
    type: 'bar', //type of chart
    data: {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'], //labels of the chart
        datasets: [{
            label: '% of People',
            data: [
                73,
                20,
                4,
                2,
                1
            ],
            backgroundColor:[
                'rgba(54, 162, 235, 0.6',
                'rgba(75, 192, 192, 0.6',
                'rgba(255, 206, 86, 0.6',
                'rgba(255, 159, 64, 0.6',
                'rgba(255, 99, 132, 0.6'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidht: 3,
            hoverBorderColor: 'black'
        }]
    },
    options: {
        plugins: {
            legend: { 
                display: false
            }
        },
        layout: {
            padding: 0
        },
        indexAxis: 'y' //horizontal bar
    }
});