const cartButton = document.querySelector('.cart-btn')
const imageCard = document.querySelector('.product-img')
const priceQuan = document.querySelector('.quantity-content')
const insertBtn = document.querySelector('.increase-btn');
const deleteBtn = document.querySelector('.delete-btn')


function cartItem(){
  const output = document.getElementById('output')
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result > 0
  }
  
  output.innerText = result
  if (cartButton) {
    imageCard.style.border = '2px solid #C73B0F'
    priceQuan.style.display = 'block'
  } else {
    cartButton.style.display = 'none';
  }
}


function removeItem() {
  let output = document.getElementById('output');
  const result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
}


cartButton.addEventListener('click', function(){
  cartItem()
  
})

insertBtn.addEventListener('click', function(){
  cartItem()
})

deleteBtn.addEventListener('click', function(){
  removeItem()
})

