//Assignment Code
var generateBtn = document.querySelector("#generate");

//Add function variables
const options = {
  lowercase = "abcdefghijklmnopqrstuvwxyz",
  uppercase = "ABCDEFGHIJKLMNOPQRUSTUVWXYZ",
  numbers = "0123456789",
  symbols = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
};

//Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  var finalPassword = ""
  //Add prompts

  var passlength = prompt("How many characters would you like your password to contain?");
  if (passLength <= 7) {
    passLength = alert("Password must be at least 8 characters.");
    }
  if (passLength >= 129) {
    passLength = alert("Password must be fewer than 128 characters.");
    }
  if (passLength == null){
    passlength = alert("Please enter the number of charcters for your password.");
  } 
  var passSpecial = confirm("Click OK to confirm special characters.");
  if (passSpecial) {
    finalPassword += options.symbols;
  };

  var passNumber = confirm("Click OK to confirm numeric characters.");
  if (passNumber) {
    finalPassword += options.numbers;
  };

  var passLowercase = confirm("Click OK to confirm lowercase characters.");
  if (passNumber) {
    finalPassword += options.lowercase;
  };

  var passUppercase = confirm("Click OK to confirm uppercase characters.");
  if (passNumber) {
    finalPassword += options.uppercase;
  };
  
  var password = "";
  for (let i = 0; i < passlength; i++) {
    password += finalPassword(Math.floor(Math.random() * finalPassword.passLength))
  }

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

//function getSymbol() {
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
    var length = Number(prompt("How many characters will your password be? Enter a number between 8 and 128"));

    ask for character type
    var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase.");
    
    generate password
    function generatePassword() {
      //evaluate character type
      var charSet = "";
      var charTypeLower = charType.toLowerCase();
      if( charTypeLower === "lowercase" ) {
        charSet = "abcdefghijklmnopqrstuvwxyz";
      } else if( charTypeLower === "uppercase" ) {
        charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } else if( charTypeLower === "numeric" ) {
        charSet = "0123456789";
      } else if( charTypeLower === "special" ) {
        charSet = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      } 
      //return value
      var retVal = "";
      for (var i = 0; i < length; i++) {
        //picks a character within charSet at index of random number
        retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      return retVal;
    }
    alert(generatePassword());

    