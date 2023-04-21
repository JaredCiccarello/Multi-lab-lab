'use strict';

function AppState() {
  this.allProducts = [];
}

// Appstate is our constructor function
AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  // These are instances OF PRODUCT
  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }
}

// These are your methods goofball
AppState.prototype.saveToLocalStorage = function () {
  // TODO: Fill in this instance method to save product data to local storage
  let stringifiedProducts = JSON.stringify(this.allProducts);
  localStorage.setItem('allProducts', stringifiedProducts)
}

AppState.prototype.loadItems = function () {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let productsFromStorage = localStorage.getItem('allProducts');
  if (productsFromStorage) {
    // Turning strings into objects thats our motto
    this.allProducts = JSON.parse(productsFromStorage);
  } else {
    this.instantiateProducts();
  }
}


function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
