const cartSubmit = document.querySelectorAll('.cart-btn');
const imageCard = document.querySelector('.product-img')
const priceQuan = document.querySelectorAll('.quantity-content');
const insertBtn = document.querySelector('.increase-btn');
const deleteBtn = document.querySelector('.delete-btn');


// this function sends the item to the cart
function addProdutToCart() {
  const output = document.getElementById('output')
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0
  }

  output.innerText = result

    imageCard.style.border = '3px solid #C73B0F'
    
    if (priceQuan) {
      priceQuan.style.display = 'block'
    }
}


// this function removes an item from the cart
function removeQuatity() {
  const output = document.getElementById('output');
  const result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0
  }

  output.innerText = result;

  if (result === 0) {
    imageCard.style.border = 'none'
    priceQuan.style.display = 'none'
  } else {
    }
  
}


// this is for the cart button
cartSubmit.forEach(function(button){
  button.addEventListener('click', function(){
    addProdutToCart()
  })
})




// this is the add button when the user wants to increase the quantity
insertBtn.addEventListener('click', function(){
  addProdutToCart()
})

// this is the remove button when the user wants to remove an item

  deleteBtn.addEventListener('click', function(){
    removeQuatity()
  })



 