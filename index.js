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

var werdfood = document.getElementById("getmetoo");

function foodFunction() {
 if (werdfood.style.display === "none") {
    werdfood.style.display = "block";
  } else {
    werdfood.style.display ="none";
  }
}


let weirdFood2 =  [foodArr[0][1], "and", foodArr[1][1]];

let weirdFoodCombo2 = weirdFood2.join(' ');

document.getElementById("getmetwo").innerHTML= weirdFoodCombo2;

var werdfood2 = document.getElementById("getmetwo");

function foodFunction2() {
 if (werdfood2.style.display === "none") {
    werdfood2.style.display = "block";
  } else {
    werdfood2.style.display ="none";
  }
}

let weirdFood3 =  [foodArr[1][0], "and", foodArr[2][2], "and", foodArr[3][1]];

let weirdFoodCombo3 = weirdFood3.join(' ');

document.getElementById("getmethree").innerHTML= weirdFoodCombo3;

var werdfood3 = document.getElementById("getmethree");

function foodFunction3() {
 if (werdfood3.style.display === "none") {
    werdfood3.style.display = "block";
  } else {
    werdfood3.style.display ="none";
  }
}

//  var foodbtn = document.getElementById('foodButton');
//  function foodFunction() { foodbtn.addEventListener('click', () => {
//     werdfood.style.display= "block";
//    })
// }


console.log(weirdFood);
console.log(weirdFoodCombo);
    




  



