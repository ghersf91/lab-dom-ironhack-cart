// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const priceNumber = Number(price.innerHTML)
  const quantityNumber = Number(quantity.value)
  const subtotalPrice = priceNumber * quantityNumber

  const newSubtotal = product.querySelector(`.subtotal span`)

  newSubtotal.innerHTML = subtotalPrice
  
  console.log(`$${subtotalPrice}`)
  return subtotalPrice

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const getAllProductsSubtotal = document.getElementsByClassName('product')


  
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
