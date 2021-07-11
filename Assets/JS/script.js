// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // array of special characters
  var specialCharacters = ["#", "@", "!", "*","&", "$", "%", "+"];

  // array of numbers
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // array of lower case letters
  var lowerCaseLetters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  // array of upper case letters
  var upperCaseLetters = ["A", "B", "C", "D", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];

  // empty array of characters
  var emptyCharacters = [];

  //ask the user how many characters
  var howManyCharacters = window.prompt("How many characters you want to include in this password?");

  // check if the answer is a number
  if (howManyCharacters === "" || howManyCharacters === null) {
    window.alert("You need to ENTER a Number from 8 to 125!");
    // use return to call it again and stop the rest of this function from running
    return generatePassword();
  }   

  // checks if number is within range
  while(parseInt(howManyCharacters) < 8 || parseInt(howManyCharacters)  > 128) {
    howManyCharacters = window.prompt("Please ENTER a number from 8 to 128!");
    return generatePassword();
  }

  //ask the user if they want numbers
  var anyNumbers = window.confirm("Would you like to include any numbers?");

  //ask the user if they want special characters
  var anySpecialCharacters = window.confirm("Would you like to include any Special Characters?");

  //ask the user if they want uppercase letters
  var anyUpperCaseLetters = window.confirm("Would you like to include any upper case letters?");

  //ask the user if they want lower case letters
  var anyLowerCaseLetters = window.confirm("Would you like to include any lower case letters?");

  // if numbers, append numbers to character array
  if (anyNumbers) {
    emptyCharacters = emptyCharacters.concat(numbers);
  }
  
  // if sc, append special characters to character array
  if (anySpecialCharacters) {
    emptyCharacters = emptyCharacters.concat(specialCharacters)
  }

  // if ul, append upper case letetrs to characters array
  if (anyUpperCaseLetters) {
    emptyCharacters = emptyCharacters.concat(upperCaseLetters);
  }

  // if ll, append lowercase letters
  if (anyLowerCaseLetters) {
    emptyCharacters = emptyCharacters.concat(lowerCaseLetters);
  }

  //generate the password
  console.log(emptyCharacters);

  var randomCharacters = "";
  
  //repeat based on number of desired characters
  
  for (let index = 0; index < howManyCharacters; index++) {
    
    //add random character from character array to password
    var randomNumber= Math.floor(Math.random() * emptyCharacters.length); 

    var randomChara = emptyCharacters[randomNumber]

    randomCharacters += randomChara;
  }

  console.log(randomCharacters)
  
  //return the password
  return randomCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
