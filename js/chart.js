'use strict';

let canvasElem = document.getElementById('chart')

// This is an instance
let appCountry = new AppState();

// let appCountry 

appCountry.loadItems()
console.log(appCountry)


/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */
function renderChart() {
  const ctx = document.getElementById('chart');
  let productName = [];
  let timesClicked = [];
  let timesShown = [];

  for (let i = 0; i < appCountry.allProducts.length; i++) {


    // we use let for name because ????
    let names = appCountry.allProducts[i].name;
    productName.push(names);
    // Using .push takes values received from the user and pushes this information back to the array
    timesClicked.push(appCountry.allProducts[i].timesClicked);
    timesShown.push(appCountry.allProducts[i].timesShown);
}

let data = {
    type: 'bar',
    data: {
        labels: productName,
        datasets: [{
            label: 'votes',
            data: timesClicked,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)'
            ],
            borderWidth: 1
        },
        {
            label: 'Views',
            data: timesShown,
            backgroundColor: [
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgb(255, 159, 64)'
            ],
            borderWidth: 1
        }]
    },

    // const config = {
    //   type: 'bar',
    //   data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

    new Chart(ctx, data);
// let canvasChart = document.getElementById('myChart');
// let chart = new Chart(canvasChart, data)

}
renderChart();
