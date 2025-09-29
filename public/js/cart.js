const cartButtons = document.querySelectorAll('.cart-btn')
const imageCards = document.querySelectorAll('.product-img')
const priceQuan = document.querySelectorAll('.quantity-content')
const insertBtn = document.querySelector('.increase-btn');
const deleteBtn = document.querySelector('.delete-btn')


function cartItem(){
  const output = document.getElementById('output')
  const result = Number(output.innerText) + 1;

  if (result > 10) {
    result > 0
  }
 
  output.innerText = result

  if (imageCards){
    imageCards.style.border = '2px solid #C73B0F'
  }
}


// function removeItem() {
//   let output = document.getElementById('output');
//   const result = Number(output.innerText) - 1;

//   if (result < 0) {
//     result = 0;
//   }

//   if (deleteBtn) {
//     priceQuan.style.display = 'none'
//     imageCards.style.border = 'none'
//   } else {
//     cartButtons.style.display = 'flex'
//   }

//    output.innerText = result;
// }

cartButtons.forEach(function(button){
  button.addEventListener('click', function(){
    cartItem()

  })
})




insertBtn.addEventListener('click', function(){
  cartItem()
})

deleteBtn.addEventListener('click', function(){
  removeItem()
})

