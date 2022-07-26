var quantity=10
var protein1 = 0 ;
var ounces=0;
let ouncesText= document.querySelector (".chickenmac");
let chicounceText=document.querySelector ("#chounces");

//chickenbuttonup
let upbutton = document.querySelector ("#up1")

function test () {
    quantity++
    //add
    
    protein1 = quantity * 6;
  
    



}

document.write (protein1)
/*
protein1=0
//chickenbuttonup
let downbutton = document.querySelector ("#down1");
downbutton.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
    //add
    ounces1 = quantity 
    protein1 = ounces * 6
    fat1 = ounces * 1
    calories1 = ounces * 41

  
//display
chicounceText.textContent= `ounces: ${ounces1} protein: ${protien1}`

})

//steak
let stkounceText =document.querySelector ("#stkounces");
let beefup= document.querySelector ("#up2");
beefup.addEventListener ("click", function(e) {
    if (quantity > 0, quantity = quantity + 1)
      //add
    
      ounces2 = quantity
      protein2= ounces2 * 7
      fats2 = ounces2 * 2
      calorie2 = ounces2 * 55
  
          
  //display
  stkounceText.textContent =` ounces: ${ounces2}, protein: ${protein2}`
  
  })

  let beefdown= document.querySelector ("#down2");
  beefdown.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
        //add
        ounces = quantity
        protein = ounces * 7
        calories = ounces * 76
        stkounceText.textContent =` ounces: ${ounces}`
        ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
      })
 
      //ground
let grndounceText =document.querySelector ("#grndounces");
let groundup= document.querySelector ("#up3");
groundup.addEventListener ("click", function(e) {
    quantity++
      //add
      ounces = quantity
      protein = ounces * 6
      calories = ounces * 40
      fat = ounces * 2.6
  
        
  //display
  grndounceText.textContent =` ounces: ${ounces}`
  ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
  })

  let grounddown= document.querySelector ("#down3");
  grounddown.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
        //add
        ounces = quantity
        protein = ounces * 7
        calories = ounces * 76
        fat = ounces * 2.6
        grndounceText.textContent =` ounces: ${ounces}`
        ouncesText.textContent =` protein: ${protein}, fat: ${fat}, calories: ${calories}`
      })
          
         
 
    //wholdeggs
let numEggsText =document.querySelector ("#numberOfEggs");
let eggsup= document.querySelector ("#up4");
eggsup.addEventListener ("click", function(e) {
    quantity++
      //add
      ounces = quantity
      protein = ounces * 6.3
      calories = ounces * 72
      fat = ounces * 4.8
  
        
  //display
  numEggsText.textContent =` Number of: ${ounces}`
  ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
  })

  let eggsdown= document.querySelector ("#down4");
  eggsdown.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
        //add
      ounces = quantity
      protein = ounces * 6.3
      calories = ounces * 72
      fat = ounces * 4.8

        numEggsText.textContent =` Number of: ${ounces}`
        ouncesText.textContent =` protein: ${protein}, fat: ${fat}, calories: ${calories}`
      })
          
         
  //EggWhites
  
let whitesText =document.querySelector ("#whtounces");
let whtup= document.querySelector ("#up5");
whtup.addEventListener ("click", function(e) {
    quantity++
      //add
      ounces = quantity
      protein = ounces * 3
      calories = ounces * 15
      fat = 0
  
        
  //display
  whitesText.textContent =` ounces: ${ounces}`
  ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
  })

  let whtdown= document.querySelector ("#down5");
whtdown.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
      //add
      ounces = quantity
      protein = ounces * 3
      calories = ounces * 15
      fat = 0
  
        
  //display
  whitesText.textContent =` ounces: ${ounces}`
  ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
  })

  //cod
  
let codText =document.querySelector ("#codounces");
let codup= document.querySelector ("#up6");
codup.addEventListener ("click", function(e) {
    quantity++
      //add
      ounces = quantity
      protein = ounces * 5
      calories = ounces * 23
      fat = .5 * ounces
  
        
  //display
  codText.textContent =` ounces: ${ounces}`
  ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
  })

  let coddown= document.querySelector ("#down6");
coddown.addEventListener ("click", function(e) {
    if (quantity >0 , quantity-- )
      //add
      ounces = quantity
      protein = ounces * 5
      calories = ounces * 23
      fat = 0.5 * ounces
  
      codText.textContent =` ounces: ${ounces}`
      ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
      })     
 

  //shrimp
  
  let shrimpText =document.querySelector ("#shrimpOunces");
  let shrimpup= document.querySelector ("#up7");
  shrimpup.addEventListener ("click", function(e) {
      quantity++
        //add
        ounces = quantity
        protein = ounces * 7
        calories = ounces * 28
        fat = .1 * ounces
    
          
    //display
    shrimpText.textContent =` ounces: ${ounces}`
    ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
    })
  
    let shrimpDown= document.querySelector ("#down7");
  shrimpDown.addEventListener ("click", function(e) {
      if (quantity >0 , quantity-- )
        //add
        ounces = quantity
        protein = ounces * 7
        calories = ounces * 28
        fat = .1 * ounces
    
        shrimpText.textContent =` ounces: ${ounces}`
        ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
        })     

      //groundTurkey
        let grndTurText =document.querySelector ("#grndTurkOunces");
        let grndTurkup= document.querySelector ("#up8");
        grndTurkup.addEventListener ("click", function(e) {
            quantity++
              //add
              ounces = quantity
              protein = ounces * 7
              calories = ounces * 42.7
              fat = .8 * ounces
          
                
          //display
          grndTurText.textContent =` ounces: ${ounces}`
          ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
          })
        
          let grndTurkDown= document.querySelector ("#down8");
          grndTurkDown.addEventListener ("click", function(e) {
            if (quantity >0 , quantity-- )
              //add
              ounces = quantity
              protein = ounces * 7
              calories = ounces * 42.7
              fat = .8 * ounces
          
          
              grndTurText.textContent =` ounces: ${ounces}`
              ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
              })     
           
           
     //groundchicken
     let grndChicText =document.querySelector ("#grndChicOunces");
     let grndChicup = document.querySelector ("#up9");
         grndChicup.addEventListener ("click", function(e) {
         quantity++
           //add
           ounces = quantity 
           protein = ounces * 6.3
           calories = ounces * 30
           fat = .5 * ounces
       
             
       //display
       grndChicText.textContent =` ounces: ${ounces}`
       ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
       })
   
      
     let grndChicDown = document.querySelector ("#down9");
         grndChicDown.addEventListener ("click", function(e) {
         quantity--
           //add
           ounces = quantity 
           protein = ounces * 6.3
           calories = ounces * 30
           fat = .5 * ounces
       
             
       //display
       grndChicText.textContent =` ounces: ${ounces}`
       ouncesText.textContent =`protein: ${protein}, fat: ${fat}, calories: ${calories}`
       })
       let greatText= document.querySelector (".great")
  */
       console.log (protein1)