// Generator Code
var charString = ["~!@#$%^&*()-_=+", "0123456789", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklnmopqrstuvwxyz"];
var password = "";
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Character length prompt
function generatePassword() {
    var uInput = [],
    var characterLength = 0
    while ((characterLength < 8 || characterLength > 256) || Number.isInteger(characterLength) === false) {
        characterLength = parseInt(prompt("How many characters would you like your password to be? (8-256)"));
    }

    var symbol = false
    var number = false
    var upper = false
    var lower = false
    


    while (!symbol && !number && !upper && !lower) {

        // Special Characters  pop up
        symbol = confirm("Click OK to confirm special characters (~!@#$%^&*()-_=+)");
                
        // Numeric pop up
        number = confirm("Click OK to confirm numeric characters");

        // Uppercase pop up
        upper = confirm("Click OK to confirm uppercase characters");

        // Lowercase pop up
        lower = confirm("Click OK to confirm lowercase characters");

        }      
  
    if (symbol) {
        uInput.push(charString[0]);
    }

    if (number) {
        uInput.push(charString[1])
    }

    if (upper) {
        uInput.push(charString[2])
    }

    if (lower) {
        uInput.push(charString[3])
    }
console.log(uInput)
    var password = "";

  //Single Array 
    uInput = uInput.join("").split("");

    for (var i = 0; i < characterLength; i++) {
        var index = (Math.floor(Math.random() * uInput.length));
        password = password + uInput[index]
    }

    return password
}
//Event listener button generator
generateBtn.addEventListener("click", writePassword);
