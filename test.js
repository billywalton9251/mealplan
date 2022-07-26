function updateQuantity(displayQuantity) {
  let quantity1 = document.querySelector('#chounces')
  quantity1.innerHTML = displayQuantity 
}

// Start chicken variables at 0 since product is in cart
let quantity1 = 0
let protein1 =0 
let fats1 =0
let calories1 = 0
// Buttons
const quantUp = document.querySelector('#up1')



// add event listener to increase quantity
quantUp.addEventListener('click', function(){
  quantity1++
  protein1= quantity1 * 6
  fats1 = quantity1 * .35
  calories1= 31 * quantity1
  updateQuantity(`ounces: ${quantity1}, protein: ${protein1}, fats ${fats1}, calories ${calories1}`)
})

//steak
function updateQuantity2(displayQuantity2) {
  let quantity2 = document.querySelector('#stkounces')
  quantity2.innerHTML = displayQuantity2
}

// Start steak variables at 0 since product is in cart
let quantity2 = 0
let protein2 =0 
let fats2 =0
let calories2 = 0
// Buttons
const quantUp2 = document.querySelector('#up2')



// add event listener to increase quantity
quantUp2.addEventListener('click', function(){
  quantity2++
  protein2= quantity2 * 6
  fats2 = quantity2 * .35
  calories2= 31 * quantity2
  updateQuantity2 (`ounces: ${quantity2}, protein: ${protein2}, fats ${fats2}, calories ${calories2}`)
})