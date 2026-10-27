function showError(spanId,message)
{
    let span=document.getElementById(spanId);
    span.className="error";
    span.innerHTML=message;
    return false;
}

function showOk(spanId,message)
{
    let span=document.getElementById(spanId);
    span.className="ok";
    span.innerHTML=message;
}

function collect_data() {
    
    let validName     = validateName();
    let validAge      = validateAge();
    let validEmail    = validateEmail();
    let validGender   = validateGender();
    let validFile     = validateFile();
    let validDOB      = validateDOB();
    let validAddress  = validateAddress();
    let validCitizen  = validateCitizen();
    let validDept     = validateDept();
    let validUsername = validateUsername();
    let validPassword = validatePassword();

    let allValid = validName && validAge && validEmail && validGender && validFile && validDOB && validAddress && validCitizen &&validDept && validUsername && validPassword;

    if (allValid) {
        console.log("Name: " + document.getElementById("StudentName").value);
        console.log("Age: " + document.getElementById("Studentage").value);
        alert("Registration Successful!");
    }
    return false;
}
function validateName() {
    let name = document.getElementById("StudentName").value.trim();

    if (name == "") {
        return showError("NameError", "Enter The Name");
    }
    else if (name.length < 6) {
        return showError("NameError", "Name Must be at least 6 Char");
    }
    else {
        return showOk("NameError", "Student Name: " + name);
    }
}
function validateAge() {
    let ageText = document.getElementById("Studentage").value;
    let age = Number(ageText);

    if (ageText == "") {
        return showError("AgeError", "Enter The Age");
    }
    else if (age < 15 || age > 100) {
        return showError("AgeError", "Age must be between 15 and 100");
    }
    else {
        return showOk("AgeError", "Student Age: " + age);
    }
}
function validateEmail() {
    let email = document.getElementById("Studentemail").value.trim();
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == "") {
        return showError("EmailError", "Enter The Email");
    }
    else if (!pattern.test(email)) {
        return showError("EmailError", "Invalid Email Format (example: abc@gmail.com)");
    }
    else {
        return showOk("EmailError", "Student Email: " + email);
    }
}

function validateFile() {
    let fileInput = document.getElementById("stududoc");

    if (fileInput.files.length == 0) {
        return showError("FileError", "Upload Student History file");
    }
    else {
        return showOk("FileError", "File: " + fileInput.files[0].name);
    }
}
function validateDOB() {
    let dobText = document.getElementById("DOB").value;

    if (dobText == "") {
        return showError("DOBError", "Select Date of Birth");
    }

    let dob = new Date(dobText);
    let today = new Date();

    if (dob > today) {
        return showError("DOBError", "Date of Birth cannot be in the future");
    }
    else {
        return showOk("DOBError", "DOB: " + dobText);
    }
}
function validateAddress() {
    let address = document.getElementById("Address").value.trim();

    if (address == "") {
        return showError("AddressError", "Enter The Address");
    }
    else if (address.length < 10) {
        return showError("AddressError", "Address Must be at least 10 Char");
    }
    else {
        return showOk("AddressError", "Address: " + address);
    }
}
function validateCitizen() {
    let citizen = document.getElementById("Citizen");

    if (citizen.value == "") {
        return showError("CitizenError", "Select a Country");
    }
    else {
        let countryName = citizen.options[citizen.selectedIndex].text;
        return showOk("CitizenError", "Citizenship: " + countryName);
    }
}
function validateUsername() {
    let username = document.getElementById("username").value.trim();

    if (username == "") {
        return showError("UsernameError", "Enter The User Name");
    }
    else if (username.length < 4) {
        return showError("UsernameError", "User Name Must be at least 4 Char");
    }
    else if (username.indexOf(" ") != -1) {
        return showError("UsernameError", "User Name cannot contain spaces");
    }
    else {
        return showOk("UsernameError", "User Name: " + username);
    }
}
function validatePassword() {
    let password = document.getElementById("password").value;

    if (password == "") {
        return showError("PasswordError", "Enter The Password");
    }
    else if (password.length < 6) {
        return showError("PasswordError", "Password Must be at least 6 Char");
    }
    else {
        
        return showOk("PasswordError", "Password is Valid (" + password.length + " characters)");
    }
}
