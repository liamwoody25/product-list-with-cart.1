const cartSumit = document.querySelector('.cart-btn');
const imageCard = document.querySelector('.product-img')
const priceQuan = document.querySelector('.quantity-content');
const insertBtn = document.querySelector('.increase-btn');

function addCartItem() {
  const output = document.getElementById('output')
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 0
  }

  output.innerText = result
  
  if (cartSumit) {
    imageCard.style.border = '2px solid #C73B0F'
    priceQuan.style.display = 'block'
  } else {
    priceQuan.style.display = 'none'
  }
}


cartSumit.addEventListener('click', function(){
  addCartItem()
})

insertBtn.addEventListener('click', function(){
  addCartItem()
})


 