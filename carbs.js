//carbohydrates
 //cream of rice  
 let crText= document.querySelector (".crmacro"); 
 let crUpButton = document.querySelector ("#crup");
 crUpButton.addEventListener ("click", function(e) {
    quantity++
    //add
    gramsCr = quantity + 1
    crCarbohydrate = gramsCr * .77
    caloriesCr = gramsCr * 3.333

   
//display
crText.textContent =`grams: ${gramsCr}, Carbs: ${crCarbohydrate}, calories: ${caloriesCr}`
})