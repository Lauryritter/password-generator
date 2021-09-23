// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

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

//Add prompts
      var passLength = ""; {
      passLength = prompt("How many characters would you like your password to contain?");
      if (passLength <= 7) {
        passLength = alert("Password must be at least 8 characters.")
        }
      if (passLength >= 129) {
        passLength = alert("Password must be fewer than 128 characters.")
        }
      if (passLength == null){
        passlength = alert("Please enter the number of charcters for your password.")
      } 
    }

    var passSpecial = ""; {
        passSpecial = confirm("Click OK to confirm special characters.")
    }

    var passNumber = ""; {
        passNumber = confirm("Click OK to confirm numeric characters.")
    }

    var passLowercase = ""; {
        passLowercase = confirm("Click OK to confirm lowercase characters.")
    }

    var passUppercase = ""; {
        passUppercase = confirm("Click OK to confirm uppercase characters.")
    }


    