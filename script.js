var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Start funcionality! Begin with length
var userchoice = prompt("How many characters would you like in your password?", "please enter a number");

if (userchoice < 8) {
    alert("Nope! Must be between 8-128");
}
if (userchoice > 128) {
    alert("Nope! Must be between 8-128");
}
else { alert("Please continue");}

// Which characters would they like to include?
var userchoiceUC = confirm("Would you like to include uppercase?");

var userchoiceLC = confirm("Would you like to include lowercase?");

var userchoiceN = confirm("Would you like to include numbers?");

var userchoiceSC = confirm("Would you like to include special characters?");



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);