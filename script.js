// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add function variables

function getLowercase() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)]
}

function getUppercase() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercase[Math.floor(Math.random() * uppercase.length)]
}

function getNumber() {
    const number = "0123456789";
    return number[Math.floor(Math.random() * number.length)]
}

function getSymbol() {
    const symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return symbol[Math.floor(Math.random() * symbol.length)]
}
