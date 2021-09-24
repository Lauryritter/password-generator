//Assignment Code
var generateBtn = document.querySelector("#generate");

//Add function variables
const options = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRUSTUVWXYZ",
  numbers: "0123456789",
  symbols: " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

generateBtn.addEventListener("click", writePassword)

//Write password to the #password input
function writePassword() {
var password = generatePassword(); 
var passwordText = document.querySelector("#password");

passwordText.value = password;
} 

//Add prompts
function generatePassword() {
    var passLength = prompt("How many characters would you like your password to contain?");{
      if (passLength <= 7) 
      passLength = window.alert("Password must be at least 8 characters.");
    }
      if (passLength >= 129) {
      passLength = window.alert("Password must be fewer than 128 characters.");
    }
      if (passLength == null){
      passlength = window.alert("Please enter the number of charcters for your password.");
    } 
    var passSpecial = window.confirm("Click OK to confirm special characters.");
      if (passSpecial) {
      password += options.symbols;
    };

    var passNumber = window.confirm("Click OK to confirm numeric characters.");
      if (passNumber) {
      password += options.numbers;
  };

    var passLowercase = window.confirm("Click OK to confirm lowercase characters.");
      if (passNumber) {
      password += options.lowercase;
  };

    var passUppercase = window.confirm("Click OK to confirm uppercase characters.");
      if (passNumber) {
      password += options.uppercase;
  };
  
  var password = "";
  for (let i = 0; i < passLength; i++) {
    password += generatePassword(Math.floor(Math.random() * generatePassword.passLength))
  }
 console.log (writePassword())

}