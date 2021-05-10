//Graph using Chart.js
let myChart = $('#myChart')[0].getContext('2d');

//Creating new chart object
let dataChart = new Chart(myChart, {
    type: 'bar', //type of chart
    data: {
        labels: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'], //labels of the chart
        datasets: [{
            label: '% of People',
            data: [
                67,
                20,
                10,
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
                display: true,
                position: 'top',
                labels: {
                    color: 'black'
                }
            }
        },
        layout: {
            padding: 0
        },
        indexAxis: 'y' //horizontal bar
    }
});

//Animating pictures using jQuery
$(document).ready(function(){

    $(".animation").mouseover(function(){
       $(this).animate({
                          height:'450px',
                          width:'auto',
                          left : '-11px'
                        })
    });
    
    $(".animation").mouseout(function(){
       $(this).animate({
                          height:'500px',
                          width:'auto',
                          left : '0px'
                        })
    });
    
});

