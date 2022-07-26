function updateQuantity(displayQuantity) {
  quantity1Display= document.querySelector('#chounces')
  quantity1Display.innerHTML = displayQuantity 

}

// Start chicken variables at 0 since product is in cart
let quantity1 = 0
let protein1 =0 
let fats1 =0
let calories1 = 0 
// Buttons
const quantUp = document.querySelector('#up1')
const quantDown = document.querySelector('#down1')


// add event listener to increase quantity
quantUp.addEventListener('click', function(){
  quantity1++
  protein1= quantity1 * 6
  fats1 = quantity1 * .35
  calories1= 31 * quantity1
  updateQuantity(`ounces: ${quantity1}, protein: ${protein1}, fats ${fats1}, calories ${calories1}`)
})

// down event listener to increase quantity
quantDown.addEventListener('click', function(){
  if (quantity1 >0) {quantity1--}
  protein1= quantity1 * 6
  fats1 = quantity1 * .35
  calories1= 31 * quantity1
  updateQuantity(`ounces: ${quantity1}, protein: ${protein1}, fats ${fats1}, calories ${calories1}`)
})

//steak
function updateQuantity2(displayQuantity2) {
  quantity2Display = document.querySelector('#stkounces')
  quantity2Display.innerHTML = displayQuantity2
}

// Start steak variables at 0 since product is in cart
let quantity2 = 0
let protein2 =0 
let fats2 =0
let calories2 = 0
// Buttons
const quantUp2 = document.querySelector('#up2')
const quantDown2 = document.querySelector('#down2')



// add event listener to increase quantity
quantUp2.addEventListener('click', function(){
  quantity2++
  protein2= quantity2 * 6
  fats2 = quantity2 * 2
  calories2= 44 * quantity2
  updateQuantity2 (`ounces: ${quantity2}, protein: ${protein2}, fats ${fats2}, calories ${calories2}`)
})

//steak down
quantDown2.addEventListener('click', function(){
  if (quantity2 >0) {quantity2--}
  protein2= quantity2 * 6
  fats2 = quantity2 * 2
  calories2= 44* quantity2
  updateQuantity2(`ounces: ${quantity2}, protein: ${protein2}, fats ${fats2}, calories ${calories2}`)
})



//Groundbee
function updateQuantity3(displayQuantity3) {
  quantity3Display = document.querySelector('#grndounces')
  quantity3Display.innerHTML = displayQuantity3
}

// Start groundbeef variables at 0 since product is in cart
let quantity3 = 0
let protein3 =0 
let fats3 =0
let calories3 = 0
// Buttons
const quantUp3 = document.querySelector('#up3')
const quantDown3 = document.querySelector('#down3')



// add event listener to increase quantity
quantUp3.addEventListener('click', function(){
  quantity3++
  protein3= quantity3 * 6
  fats3 = quantity3 * 2.6
  calories3= 40 * quantity3
  updateQuantity3 (`ounces: ${quantity3}, protein: ${protein3}, fats ${fats3}, calories ${calories3}`)
})

//steak down
quantDown3.addEventListener('click', function(){
  if (quantity3 >0) {quantity3--}
  protein3= quantity3 * 6
  fats3 = quantity3 * 2.6
  calories3= 40 * quantity3
  updateQuantity3(`ounces: ${quantity3}, protein: ${protein3}, fats ${fats3}, calories ${calories3}`)
})

//whole eggs
function updateQuantity4(displayQuantity4) {
  quantity4Display = document.querySelector('#numberOfEggs')
  quantity4Display.innerHTML = displayQuantity4
  }
  
  // Start whole variables at 0 since product is in cart
  let quantity4 = 0
  let protein4 =0 
  let fats4 =0
  let calories4 = 0
  // Buttons
  const quantUp4 = document.querySelector('#up4')
  const quantDown4 = document.querySelector('#down4')
  
  
  
  // add event listener to increase quantity
  quantUp4.addEventListener('click', function(){
  quantity4++
  protein4= quantity4 * 6.3
  fats4 = quantity4 * 4.8
  calories4= 72 * quantity4
  updateQuantity4 (`Number of Eggs: ${quantity4}, protein: ${protein4}, fats ${fats4}, calories ${calories4}`)
  })
  
  //egg down
  quantDown4.addEventListener('click', function(){
  if (quantity4 >0) {quantity4--}
  protein4= quantity4 * 6.3
  fats4 = quantity4 * 4.8
  calories4= 72 * quantity4
  updateQuantity4(`Number of Eggs: ${quantity4}, protein: ${protein4}, fats ${fats4}, calories ${calories4}`)
  })


//egg whtes
function updateQuantity5(displayQuantity5) {
  quantity5Display = document.querySelector('#whtounces')
  quantity5Display.innerHTML = displayQuantity5
  }
  
  // Start egg white variables at 0 since product is in cart
  let quantity5 = 0
  let protein5 =0 
  let fats5 =0
  let calories5 = 0
  // Buttons
  const quantUp5 = document.querySelector('#up5')
  const quantDown5 = document.querySelector('#down5')
  
  
  
  // add event listener to increase quantity
  quantUp5.addEventListener('click', function(){
  quantity5++
  protein5= quantity5 * 3
  fats5 = quantity5 * 0
  calories5= 15 * quantity5
  updateQuantity5 (`ounces: ${quantity5}, protein: ${protein5}, fats ${fats5}, calories ${calories5}`)
  })
  
  // down
  quantDown5.addEventListener('click', function(){
  if (quantity5 >0) {quantity5--}
  protein5= quantity5 * 3
  fats5 = quantity5 * 0
  calories5= 15 * quantity5
  updateQuantity5(`ounces: ${quantity5}, protein: ${protein5}, fats ${fats5}, calories ${calories5}`)

})

//Cod
function updateQuantity6(displayQuantity6) {
  quantity6Display = document.querySelector('#codounces')
  quantity6Display.innerHTML = displayQuantity6
  }
  
  // Start  variables at 0 since product is in cart
  let quantity6 = 0
  let protein6 =0 
  let fats6 =0
  let calories6 = 0
  // Buttons
  const quantUp6 = document.querySelector('#up6')
  const quantDown6 = document.querySelector('#down6')
  
  
  
  // add event listener to increase quantity
  quantUp6.addEventListener('click', function(){
  quantity6++
  protein6= quantity6 * 5
  fats6 = quantity6 * .5
  calories6= 23 * quantity6
  updateQuantity6 (`ounces: ${quantity6}, protein: ${protein6}, fats ${fats6}, calories ${calories6}`)
  })
  
  // down
  quantDown6.addEventListener('click', function(){
  if (quantity6 >0) {quantity6--}
  protein6= quantity6 * 5
  fats6 = quantity6 * .5
  calories6= 23 * quantity6
  updateQuantity6(`ounces: ${quantity6}, protein: ${protein6}, fats ${fats6}, calories ${calories6}`)
  })

//shrimp
function updateQuantity7(displayQuantity7) {
  quantity7Display = document.querySelector('#shrimpOunces')
  quantity7Display.innerHTML = displayQuantity7
  }
  
  // Start  variables at 0 since product is in cart
  let quantity7 = 0
  let protein7 =0 
  let fats7 =0
  let calories7 = 0
  // Buttons
  const quantUp7 = document.querySelector('#up7')
  const quantDown7 = document.querySelector('#down7')
  
  
  
  // add event listener to increase quantity
  quantUp7.addEventListener('click', function(){
  quantity7++
  protein7= quantity7 * 7
  fats7 = quantity7 * .1
  calories7= 28 * quantity7
  updateQuantity7 (`ounces: ${quantity7}, protein: ${protein7}, fats ${fats7}, calories ${calories7}`)
  })
  
  //down
  quantDown7.addEventListener('click', function(){
  if (quantity7 >0) {quantity7--}
  protein7= quantity7 * 7
  fats7 = quantity7 * .1
  calories7= 28 * quantity7
  updateQuantity7(`ounces: ${quantity7}, protein: ${protein7}, fats ${fats7}, calories ${calories7}`)
  })


//Groud turkey
function updateQuantity8(displayQuantity8) {
  quantity8Display = document.querySelector('#grndTurkOunces')
  quantity8Display.innerHTML = displayQuantity8
  }
  
  // Start  variables at 0 since product is in cart
  let quantity8 = 0
  let protein8 =0 
  let fats8 =0
  let calories8 = 0
  // Buttons
  const quantUp8 = document.querySelector('#up8')
  const quantDown8 = document.querySelector('#down8')
  
  
  
  // add event listener to increase quantity
  quantUp8.addEventListener('click', function(){
  quantity8++
  protein8= quantity8 * 7
  fats8 = quantity8 * .8
  calories8= 42.7 * quantity8
  updateQuantity8 (`ounces: ${quantity8}, protein: ${protein8}, fats ${fats8}, calories ${calories8}`)
  })
  
  // down
  quantDown8.addEventListener('click', function(){
  if (quantity8 >0) {quantity8--}
  protein8= quantity8 * 7
  fats8 = quantity8 * .8
  calories8= 42.7 * quantity8
  updateQuantity8(`ounces: ${quantity8}, protein: ${protein8}, fats ${fats8}, calories ${calories8}`)
  })


//Groud chicken
function updateQuantity9(displayQuantity9) {
  quantity9Display = document.querySelector('#grndChicOunces')
  quantity9Display.innerHTML = displayQuantity9
  }
  
  // Start  variables at 0 since product is in cart
  let quantity9 = 0
  let protein9 =0 
  let fats9 =0
  let calories9 = 0
  // Buttons
  const quantUp9 = document.querySelector('#up9')
  const quantDown9 = document.querySelector('#down9')
  
  
  
  // add event listener to increase quantity
  quantUp9.addEventListener('click', function(){
  quantity9++
  protein9= quantity9 * 6.3
  fats9 = quantity9 * .5
  calories9= 30 * quantity9
  updateQuantity9 (`ounces: ${quantity9}, protein: ${protein9}, fats ${fats9}, calories ${calories9}`)
  })
  
  // down
  quantDown9.addEventListener('click', function(){
  if (quantity9 >0) {quantity9--}
  protein9= quantity9 * 6.3
  fats9 = quantity9 * .5
  calories9= 30 * quantity9
  updateQuantity9(`ounces: ${quantity9}, protein: ${protein9}, fats ${fats9}, calories ${calories9}`)
  })









//total
function updateTotal(displayTotal) {
  quantityTotal= document.querySelector('#total')
  quantityTotal.innerHTML = displayTotal
}
const totalup = document.querySelector("#totalUp");


totalup.addEventListener('click', function(){
  totalprotein= protein1 + protein2 + protein3 + protein4 + protein5 + protein6 +protein7 + protein8 + protein9
  totalfats= fats1 + fats2 + fats3 + fats4 + fats5 + fats6 + fats7 + fats8 + fats9
  totalcalories= calories1 + calories2 + calories3 + calories4 + calories5 + calories6 + calories7 + calories8 + calories9
  updateTotal (`Total Protein: ${totalprotein}, Total Fats: ${totalfats}, Total Calories: ${totalcalories}`)
})

function getVal() {
   val = document.querySelector('input').value;
  console.log(val);
}
