
var generateBtn = document.querySelector("#generate");

function generatePassword() {

//arrays for characters 

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty arrays to place characters in. 
 
var resultArray = [];
var userArray = [];

uppercaseArray [1];


  var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
  var numbers = confirm ("Would you like numbers in your password?");
  var upperCases = confirm ("Would you like numbers uppercase characters in your password?");
  var lowerCases = confirm ("Would you like numbers lowercases characters in your password?");
  var specChar = confirm ("Would you like numbers special characters in your password?");

// attempted to add an alert warning if user selects less than 7 and more than 128 characters but error in code. 
if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}


if (upperCases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowerCases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (specChar){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


// loop
for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
