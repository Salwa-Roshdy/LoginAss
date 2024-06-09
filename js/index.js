var emailInput = document.getElementById("email")
var passwordInput = document.getElementById("password")
var nameInput = document.getElementById("name")

var loginBtn = document.getElementById("login")
var signupBtn = document.getElementById("signup")
loginBtn.addEventListener("click", function () {
    loginUser()
})



var usersList = []
/* if (localStorage.getItem("users") != null) {
    usersList = JSON.parse(localStorage.getItem("users"))
} */

var emailValid
var passwordValid
/* function loginUser() {

    var email = emailInput.value
    var password = passwordInput.value
    for (var i = 0; i < usersList.length; i++) {

        if (usersList[i].userEmail == email && usersList[i].userPass == password) {

            includeUser = 0;
      
        }
        else if (usersList[i].userEmail != email && usersList[i].userPass == password) {
            includeUser = 1;

        }
        else if (usersList[i].userEmail == email && usersList[i].userPass != password) {

            includeUser = 2;
        
        }

    }
    if (includeUser == 1) {
        console.log("the  email isn't true")
    }
    else if (includeUser == 2) {
        console.log("the  password isn't true")
    }

    else if (includeUser == 0) {
        window.location = 'home.html'

    }
} */

function loginUser() {

    var email = emailInput.value
    var password = passwordInput.value
    if (localStorage.getItem("users") != null) {
        usersList = JSON.parse(localStorage.getItem("users"))

    }
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userEmail != email) {

            emailValid = 0;
            /*  console.log(loginuser) */
            console.log("the email doesn't exist")


        }
        else if (usersList[i].userEmail == email) {

            emailValid = 1
            if (usersList[i].userPass == password) {

                passwordValid = 1

                console.log("login successfully")
            }
            else {
                passwordValid = 0;
                /*       console.log(loginuser) */
                console.log("wrong password")
            }
        }
        /*    
      */
    }

    if (emailValid == 0) {
        alert("the email doesn't exist")
        /*         emailInput.classList.add("is-valid")
                emailInput.classList.remove("is-invalid")*/
        emailAlert.classList.remove("d-none")
    }
    else if (emailValid == 1) {
        if (passwordValid == 1) {
            window.location = 'home.html'
            clear()

        }
        else {
            alert("password wrong")

        }
    }


    /*  if() */
}

function clear() {
    emailInput.value = null
    passwordInput.value = null
}
function validationEmail() {
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

    var Email = emailInput.value

    if (emailRegex.test(Email)) {
        console.log("MATCH")
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        return true;

    }
    else {
        console.log("not match")
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
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
        return true;

    }
    else {
        console.log("not valid")
        passwordInput.classList.add("is-invalid")
        passwordInput.classList.remove("is-valid")
        return false;

    }
}