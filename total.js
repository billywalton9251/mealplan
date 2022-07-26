let macTotal=document.querySelector (".totalMac")
let totalButton = document.querySelector ("#total");
totalButton.addEventListener (function(e) {
    quantity++
    totalProtein = protein
    totalCarbs = crCarbohydrate
    totalCalories = calories + caloriesCr
  macTotal.textContent = `protein: ${totalProtein} , carbs: ${totalCarbs} , calories: ${totalCalories}`

} )