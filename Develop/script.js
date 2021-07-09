// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // array of special characters
  var specialCharacters = ["#", "@", "!", "*","&"];
  console.log(specialCharacters);
  console.log(specialCharacters[4]);

  // array of numbers
  var numbers = ["1", "2", "3"];
  console.log(numbers);
  console.log(numbers[2]);

  // array of lower case letters
  var lowerCaseLetters = ["a", "b", "c"];
  console.log(lowerCaseLetters);

  // array of upper case letters
  var upperCaseLetters = ["A", "B", "C"];
  console.log(upperCaseLetters);

  // empty array of characters
  var emptyCharacters = [""];
  console.log(emptyCharacters);

  //ask the user how many characters
  var howManyCharacters = window.prompt("how many characters you want to include in this password?");


  //ask the user if they want numbers
  var anyNumbers = window.confirm("would you like to include any numbers?");

  //ask the user if they want special characters
  var anySpecialCharacters = window.confirm("Would you like to include any Special Characters?");

  //ask the user if they want uppercase letters
  var anyUpperCaseLetters = window.confirm("Would you like to include any upper case letters?");

  //ask the user if they want lower case letters
  var anyLowerCaseLetters = window.confirm("Would you like to include any lower case letters?");

  // if numbers, append numbers to character array

  // if sc, append special characters to character array

  // if ul, append upper case letetrs to characters array

  // if ll, append lowercase letters

  //generate the password
  
  //repeat based on number of desired characters

  //add random character from character array to password
  Math.floor(Math.random() * 21) + 40;

  //return the password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
