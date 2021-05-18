var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// Start funcionality! Begin with length

function getUserChoices(){
var userchoice = prompt("How many characters would you like in your password?", "please enter a number");



if (userchoice < 8 || userchoice > 128) {
    alert("Nope! Must be between 8-128");
    
    
}


else { alert("Awesome please continue");

// Which characters would they like to include?
var userchoiceUC = confirm("Would you like to include uppercase?");

var userchoiceLC = confirm("Would you like to include lowercase?");

var userchoiceN = confirm("Would you like to include numbers?");

var userchoiceSC = confirm("Would you like to include special characters?");
// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
if (!userchoiceUC && !userchoiceLC && !userchoiceN && !userchoiceSC) {
    alert("No, you must pick one type of character!");
    return;
}

}
var passwordOptions = {
    passwordLength: userchoice,
    uppercaseChoice: userchoiceUC,
    lowercaseChoice: userchoiceLC,
    numberChoice: userchoiceN,
    specialCharacterChoice: userchoiceSC
}
return passwordOptions;

}

function getRandom(array){
return array[Math.floor(Math.random() * array.length)]

}

function generatePassword(){
    var options = getUserChoices()
    var results = []
    var possibleCharacters = []
    var guaranteeCharacters = []

    if (options.specialCharacterChoice){
        possibleCharacters = possibleCharacters.concat(specialCharacters)
        guaranteeCharacters.push(getRandom(specialCharacters))
    }
    if (options.numberChoice){
        possibleCharacters = possibleCharacters.concat(numbers)
        guaranteeCharacters.push(getRandom(numbers))
    }
    if (options.lowercaseChoice){
        possibleCharacters = possibleCharacters.concat(lowercase)
        guaranteeCharacters.push(getRandom(lowercase))
    }
    if (options.uppercaseChoice){
        possibleCharacters = possibleCharacters.concat(uppercase)
        guaranteeCharacters.push(getRandom(uppercase))
}
var finalPassword= ""
for (var i=0; i<guaranteeCharacters.length; i++){
    finalPassword+=guaranteeCharacters[Math.floor(Math.random() * guaranteeCharacters.length)]

}

for (var i=0; i<(options.passwordLength-guaranteeCharacters.length); i++){
    finalPassword+=possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]

}

return finalPassword
}

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