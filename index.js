
function validateData() {
    var nama = document.getElementById("namaTF");
    var email = document.getElementById("emailTF");
    var address = document.getElementById("addressTF");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var terms = document.getElementById("terms");
    var date = document.getElementById("date");

    if (nama.value.length < 8) {
        alert("Name must be at least 8 characters");
    } else if (!email.value.endsWith("@yahoo.com") && !email.value.endsWith("@gmail.com")) {
        alert("Email must end with @yahoo.com or @gmail.com");
    } else if (address.value.length < 10) { 
        alert("Address must be at least 10 characters");
    }else if (!male.checked && !female.checked) {
        alert("Gender must be selected");
    } else if (date.value === "") {
        alert("Date of Birth must be filled");
    } else if (!terms.checked) {
        alert("Terms must be checked");
    } else {
        var selectedDate = new Date(date.value);
        var currentDate = new Date();
        var selectedYear = selectedDate.getFullYear();

        if (selectedDate > currentDate) {
            alert("Please select a date that is not in the future.");
            return;
        }

        if (selectedYear < 1924 || selectedYear > 2024) {
            alert("Please select a date between 1924 and 2024.");
            return;
        }

        var genderValue = male.checked ? "Male" : "Female";
        alert("Thanks for your registeration :)");
    }

    console.log("Validation success");
}

function openPrivacyPolicy() {
    document.getElementById("privacyPolicyModal").style.display = "block";
}

function closePrivacyPolicy() {
    document.getElementById("privacyPolicyModal").style.display = "none";
}
window.onclick = function(event) {
    var modal = document.getElementById("privacyPolicyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

