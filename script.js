const allCharts = document.querySelectorAll(".chart");
const chartBars = document.querySelectorAll(".chart_bar");

// fetch data from the data.json file using fetch API & manipulate
const fetchedData = fetch("data.json")
.then(res => res.json())
.then(data => {

    // set the amount value in each data to .value in each .chart
    allCharts.forEach((chart, index) => {
    chart.querySelector(".value").innerHTML = `$${data[index].amount}`;

    // set the day value in each data to .day in each .chart 
    chart.querySelector('.day').innerHTML = `${data[index].day}`
    })
});

// add the chart hover functionality
chartBars.forEach(chartBar => {
    chartBar.addEventListener('mouseover', (e) => {
    e.target.previousElementSibling.classList.add('hovered');
    });
})

chartBars.forEach(chartBar => {
    chartBar.addEventListener('mouseout', (e) => {
    e.target.previousElementSibling.classList.remove('hovered');
    });
})

