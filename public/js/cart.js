const cartButton = document.querySelector('.cart-btn')
const imageCard = document.querySelector('.product-img')
const priceQuan = document.querySelector('.quantity-content')



function cartItem(){
  if (cartButton) {
    imageCard.style.border = '2px solid #C73B0F'
    priceQuan.style.display = 'block'
  } else {
    cartButton.style.display = 'none';
  }
}


cartButton.addEventListener('click', function(){
  cartItem()
})