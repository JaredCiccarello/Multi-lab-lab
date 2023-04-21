'use strict';

let canvasElem = document.getElementById('chart')

let appCountry = new AppState();

appCountry.loadItems();

console.log(appCountry);

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
    let names = appCountry.allProducts[i].name;
    productName.push(names);

    timesClicked.push(appCountry.allProducts[i].timesClicked);
    timesShown.push(appCountry.allProducts[i].timesShown);
  }

  let config = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [
        {
          label: '# of Votes',
          data: timesClicked,
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)'
          ]
        },
        {
          label: '# of Views',
          data: timesShown,
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)'
          ]
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  new Chart(ctx, config);
}

renderChart();
