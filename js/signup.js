var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var nameInput = document.getElementById("name")
var emailAlert = document.getElementById("email-alert")
var nameAlert = document.getElementById("name-alert")
var passwordAlert = document.getElementById("password-alert")

var signupBtn = document.getElementById("signup")

signupBtn.addEventListener("click", function () {
    signUp()
    /*  sign() */
})
nameInput.addEventListener("input", function () {

    validationName()

})
passwordInput.addEventListener("input", function () {

    validationPassword()

})
emailInput.addEventListener("input", function () {

    validationEmail()

})

var usersList = []
var includeUser = false
function signUp() {
    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    if (localStorage.getItem("users") != null) {
        usersList = JSON.parse(localStorage.getItem("users"))
    }


    for (var i = 0; i < usersList.length; i++) {

        if (usersList[i].userEmail == email) {

            includeUser = true;
            /*     console.log(includeUser + " user signed up already") */
        }
        else {

            includeUser = false;
            /*     console.log(includeUser + " user doesnt include") */
        }

    }
    if (includeUser == false) {
        addUser();


    }
    else {
        alert("the user already signed up")
    }


    /*  if() */
}
/* function sign() {
    var name = nameInput.value
    var email = emailInput.value
    var password = passwordInput.value
    if (localStorage.getItem("users") != null) {
        usersList = JSON.parse(localStorage.getItem("users"))
    }
    if (usersList.includes(email)) {
        console.log("the email is exist")
    }
    else {
        console.log("you can sign up")
    }
} */
function addUser() {

    if (validationEmail() == true && validationName() == true && validationPassword() == true) {
        users = {
            usereName: nameInput.value,
            userPass: passwordInput.value,
            userEmail: emailInput.value
        }
        usersList.push(users)
        localStorage.setItem("users", JSON.stringify(usersList))
        alert("the user added successfully")

        console.log("the user added sucessfully")
        window.location = 'index.html'
    }
    else {
        console.log("cannt add user")
    }
}

function validationName() {
    var nameRegex = /^[a-zA-Z]{3,}$/
    var Name = nameInput.value
    if (nameRegex.test(Name)) {
        console.log("Name Match")
        nameInput.classList.remove("is-invalid")
        nameInput.classList.add("is-valid")
        nameAlert.classList.add("d-none")
        return true;
    }
    else {
        console.log("Name not Match")
        nameInput.classList.remove("is-valid")
        nameInput.classList.add("is-invalid")
        nameAlert.classList.remove("d-none")

        return false;
    }
}



function validationEmail() {
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    var Email = emailInput.value

    if (emailRegex.test(Email)) {
        console.log("MATCH")
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        emailAlert.classList.add("d-none")
        return true;

    }
    else {
        console.log("not match")
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        emailAlert.classList.remove("d-none")
        return false;

    }
}
function validationPassword() {
    var passwordRegex = /^[a-zA-Z0-9]{5,}$/
    /*     /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ */
    var Password = passwordInput.value
    if (passwordRegex.test(Password)) {
        console.log("password valid ")
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        passwordAlert.classList.add("d-none")
        return true;
    }
    else {
        console.log("not valid")
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        passwordAlert.classList.remove("d-none")
        return false;
    }
}