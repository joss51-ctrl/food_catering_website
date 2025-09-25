function validateDataOld() {

var email = document.getElementById("emailOld");
var password = document.getElementById("passwordOld");

if (!email.value.endsWith("@yahoo.com") && !email.value.endsWith("@gmail.com")) {
    alert("Email must end with @yahoo.com or @gmail.com");
} else if (!checkAlphaNumeric(password.value)) {
    alert("Password must be alphanumeric");
}else if(password.value.length<8){
    alert("Password must be atleast 8 character");
}else{
    alert("Login Success :)");
}
}

function checkAlphaNumeric(password) {
    var isAlpha = false;
    var isNum = false;

    for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            isAlpha = true;
        } else {
            isNum = true;
        }

        if (isAlpha && isNum) {
            return true;
        }
    }
    return false;
}