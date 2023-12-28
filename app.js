let username = document.querySelector('input.username-input')
let email = document.querySelector('input.email-input')
let password = document.querySelector('input.password-input')
let verifyPass = document.querySelector('input.confirm-pass-input')
let signUp = document.querySelector('.sign-up')



let usernameVal = function() {return document.querySelector('input.username-input').checkValidity()}
let emailVal = function() {return document.querySelector('input.email-input').checkValidity()}
let passVal = function() {return document.querySelector('input.password-input').checkValidity()}
let verifyPassVal = function(){
    if(password.value != verifyPass.value){
        verifyPass.setCustomValidity("Passwords don't match!")
    }else{
        verifyPass.setCustomValidity('')
    }
}

password.onchange = verifyPassVal;
verifyPass.onkeyup = verifyPassVal;
