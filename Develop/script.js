// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // array of special characters
  var specialCharacters = ["#", "@", "!", "*","&", "$", "%", "+"];

  //  let sc = specialCharacters.length;  

  // for (let i = 0; i < sc; i++) {
  //   text += ""

  //  }

   // 
  

  // array of numbers
  var numbers = ["1", "2", "3", "4", "5", "6"];
  console.log(numbers);
  console.log(numbers[2]);

  // array of lower case letters
  var lowerCaseLetters = ["a", "b", "c"];
  console.log(lowerCaseLetters);

  // array of upper case letters
  var upperCaseLetters = ["A", "B", "C"];
  console.log(upperCaseLetters);

  // empty array of characters
  var emptyCharacters = [];
  console.log(emptyCharacters);

  //ask the user how many characters
  var howManyCharacters = window.prompt("how many characters you want to include in this password?");
  // answers from window.promt is always of datatype STRING

  // parseInt converts a STRING datatype to an number data type
  // "10" ---> 10
  // "10" + "11" = "1011"
  // 10 + 11 = 21

  // check if the answer is a number
  

  // checks if number is within range
  while(parseInt(howManyCharacters) < 8 || parseInt(howManyCharacters)  > 128) {
    howManyCharacters = window.prompt("how many characters you want to include in this password?");
  }


  //ask the user if they want numbers
  var anyNumbers = window.confirm("would you like to include any numbers?");

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


  // if ll, append lowercase letters


  //generate the password
  console.log(emptyCharacters);


  var randomCharacters = "";
  
  //repeat based on number of desired characters
  // howManyCharacters
  for (let index = 0; index < howManyCharacters; index++) {
    
    //add random character from character array to password
    var randomNumber= Math.floor(Math.random() * emptyCharacters.length); /// random number between 0 -> 1 ... 0.12431231, 0.97457654, 0.9999999
    // 1.36  -> 1
    // 10.7  --> 10
    // 10.9999999999 --> 10
    // 0 - 10

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



