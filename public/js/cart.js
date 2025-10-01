const cartSubmit = document.querySelector('.cart-btn');
const imageCard = document.querySelector('.product-img')
const priceQuan = document.querySelector('.quantity-content');
const insertBtn = document.querySelector('.increase-btn');
const deleteBtn = document.querySelector('.delete-btn');


// this function sends the items to the cart
function addCartItem() {
  const output = document.getElementById('output')
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0
  }

  output.innerText = result
  
}


// this function removes the items from the cart
function removeItem() {
  const output = document.getElementById('output');
  const result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0
  }

  output.innerText = result;

  if (deleteBtn) {
    imageCard.style.border = 'none'
    result = 0
  }
}


// this is for the cart button
  cartSubmit.addEventListener('click', function(){
    addCartItem()
    imageCard.style.border = '3px solid #C73B0F'
    priceQuan.style.display = 'block'
  })



// this is the add button when the user wants to increase the quantity
insertBtn.addEventListener('click', function(){
  addCartItem()
})

// this is the remove button when the user wants to remove an item
deleteBtn.addEventListener('click', function(){
  removeItem()
})


 