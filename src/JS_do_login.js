var email= null;
var password= null;
var submit= null;
var username= null;
function getAll() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    username = document.getElementById('username').value;
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('username', username)
}

var email1= null;
var password1= null;
var tentativas= 3;
function getIn() {
    email1 = document.getElementById('email1').value;
    password1 = document.getElementById('password1').value;
    if(email1===localStorage.getItem('email') && password1===localStorage.getItem('password')) {
       window.location.href="Trabalho_de_AP_profiles.html"
    }
    else if (tentativas===0) {
        alert("no more tries")
        window.location.href="Trabalho_de_AP_ERROR.html"
    }
    else {
        alert("Error, "+tentativas+" tentativas restantes")
        tentativas--;
    }
}