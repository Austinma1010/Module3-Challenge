// Creates variable that contain the different characters used in password creation
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";
// this function will generate a password in accordance with the users inputs
 function generatePassword() {
    var upper = window.confirm("Would you like uppercase letters? (Press 'OK' for yes and 'cancel' for no"); // Prompts the user to choose the character types used in password
    var lower = window.confirm("Would you like lowercase letters? (Press 'OK' for yes and 'cancel' for no)");
    var num = window.confirm("Would you like numbers? (Press 'OK' for yes and 'cancel' for no)");
    var specialChar = window.confirm("Would you like special characters? (Press 'OK' for yes and 'cancel' for no)");
    var pwLength = window.prompt("How long would you like your password to be? (Must be at least 8 characters and can't excede 128)"); // lets user choose the length of their password
    // This if-else statement ensures the user only enters an allowed length
    if (pwLength < 8) {
        window.confirm("Password is too short. Please try again");
        location.reload();
    } else if (pwLength > 128) {
        window.confirm("Password is too long. Please try again");
        location.reload();
    }
// These conditional statements determine what characters are included in the password depending on the users choices
    if (upper === true && lower === true && num === true && specialChar === true) {
        var randString = lowerCase + upperCase + numbers + special;
        var passWord = " ";
        for (i = 0; i < pwLength; i++) {
            let char = Math.floor(Math.random() * randString.length + 1);
            passWord += randString.charAt(char);
            

        }
        return passWord;
    } else if (upper === true && lower === true && num === true && specialChar !== true) {
        var randString = lowerCase + upperCase + numbers;
        var passWord = " ";
        for (i = 0; i < pwLength; i++) {
            let char = Math.floor(Math.random() * randString.length + 1);
            passWord += randString.charAt(char);
            

        }
        return passWord;
    } else if (upper === true && lower === true && num !== true && specialChar !== true) {
        var randString = lowerCase + upperCase;
        var passWord = " ";
        for (i = 0; i < pwLength; i++) {
            let char = Math.floor(Math.random() * randString.length + 1);
            passWord += randString.charAt(char);
            

        }
        return passWord;
} else if (upper === true && lower !== true && num !== true && specialChar !== true) {
    var randString = upperCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower === true && num !== true && specialChar !== true) {
    var randString = lowerCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower !== true && num === true && specialChar !== true) {
    var randString = numbers;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower !== true && num !== true && specialChar === true) {
    var randString = special;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower !== true && num === true && specialChar === true) {
    var randString = special + numbers;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower === true && num !== true && specialChar === true) {
    var randString = special + lowerCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper === true && lower !== true && num !== true && specialChar === true) {
    var randString = special + upperCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower === true && num === true && specialChar !== true) {
    var randString = numbers + lowerCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper === true && lower !== true && num === true && specialChar !== true) {
    var randString = numbers + upperCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper === true && lower === true && num !== true && specialChar !== true) {
    var randString = upperCase + lowerCase;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper === true && lower === true && num !== true && specialChar === true) {
    var randString = upperCase + lowerCase + special;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper === true && lower !== true && num === true && specialChar === true) {
    var randString = upperCase + numbers + special;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} else if (upper !== true && lower === true && num === true && specialChar === true) {
    var randString = lowerCase + upperCase + special;
    var passWord = " ";
    for (i = 0; i < pwLength; i++) {
        let char = Math.floor(Math.random() * randString.length + 1);
        passWord += randString.charAt(char);
        

    }
    return passWord;
} 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
