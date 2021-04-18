let firstArray = ["I", "Need", "To", "Get", "This", "Right"];

let domText = firstArray.join(' ');

console.log(domText);

document.getElementById("getme").innerHTML= domText;


let secondArray = 'Me,JavaScript,A,match.';

let domTexttwo = secondArray.split(' ');

console.log(domTexttwo);


//No.2 - nesting and accessing nested arrays

let foodArr = [
    ["rice", "chicken", "soup"],
    ["pancakes", "syrup", "cream"],
    ["fries", "salad", "steak"],
    [['noodles', 'chicken'], "pasta", "fish"]
  ];
let weirdFood =  [foodArr[0][2], "and", foodArr[1][2]];

let weirdFoodCombo = weirdFood.join(' ');

document.getElementById("getmetoo").innerHTML= weirdFoodCombo;

let foodbtn = document.getElementById("foodButton");

//  _foodFunction=>{
 
//   document.getElementById("getmetoo").classList.add('showFood');

// }

foodbtn.addEventListener('click', () => {
  document.getElementById("getmetoo").classList.add('showFood')
})




console.log(weirdFood);
console.log(weirdFoodCombo);
    



  



