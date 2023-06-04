var name= null;
var start= null;

function getName() {
    name = document.getElementById('name').value;
    localStorage.setItem('name', name) 
}

