//Assignment Code
const generateButton = document.getElementById("generateBtn");

//Added arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Add EventListener
generateBtn.addEventListener("click", writePassword)

//Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} 

//variables for prompts

var passLength;
var passLength = "";
var passSpecial;
var passLowercase;
var passUppercase;

//Add prompts
function generatePassword() {
    var passLength = prompt("How many characters would you like your password to contain?");{
      while (passLength <= 7) {
      passLength = alert("Password must be at least 8 characters.");
      var passLength = prompt("How many characters would you like your password to contain?");
      }
    }      
      while (passLength >= 129) {
      passLength = alert("Password must be fewer than 128 characters.");
      var passLength = prompt("How many characters would you like your password to contain?");
    }
      while (passLength == null){
      passLength = alert("Please enter the number of charcters for your password.");
      var passLength = prompt("How many characters would you like your password to contain?");
    } 
    var passSpecial = confirm("Click OK to confirm special characters.");
      
    var passNumber = window.confirm("Click OK to confirm numeric characters.");
      
    var passLowercase = window.confirm("Click OK to confirm lowercase characters.");
    
    var passUppercase = window.confirm("Click OK to confirm uppercase characters.");
    
    //Enter minimum for numbers, lowercase, uppercase and special characters.
    var minimumChar;
    minimumChar = [];



    //Run if scenarios

    if(passSpecial === true){
      minimumChar = symbols;
    }
    if (passNumber === true){
      minimumChar = numbers;
    }
    if (passLowercase === true){
      minimumChar = lowercase;
    }

    if (passUppercase === true){
      minimumChar = uppercase;
    }

    if (passSpecial){
      minimumChar = minimumChar.concat(symbols)
    }

    if (passNumber){
      minimumChar = minimumChar.concat(numbers)
    }

    if (passLowercase){
      minimumChar = minimumChar.concat(lowercase)
    }

    if (passUppercase){
      minimumChar = minimumChar.concat(uppercase)
    }

    var ranPassword = ""

    //loop random characters

    for (var i = passLength; i< length; i++) 
    writePassword = ranPassword + minimumChar[Math.floor(math.random() * minimumChar.length)]

    return ranPassword;
  }