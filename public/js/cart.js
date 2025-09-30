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
  
  if (cartSubmit) {
    imageCard.style.border = '2px solid #C73B0F'
    priceQuan.style.display = 'block'
  } else {
    priceQuan.style.display = 'none'
  }
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
    priceQuan = result
    output.innerText = result;
  }
}


cartSubmit.addEventListener('click', function(){
  addCartItem()
})

insertBtn.addEventListener('click', function(){
  addCartItem()
})

deleteBtn.addEventListener('click', function(){
  removeItem()
})


 